from datetime import date, datetime, timedelta
from Main.models import *
from django.utils import timezone
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import socket
from time import sleep
from django.conf import settings


def run():
    users = [user for user in UserModel.objects.all() if user.want_remainder]
    today = timezone.now()
    itemsAbleToDonateDict = getItemsAbleToDonate()
    sendEmails(users, today, itemsAbleToDonateDict)


def getItemsAbleToDonate():
    BloodWasPrev = dict(
        [(8, ("Blood", "Plasma", "Platelets", "Erythrocytes", "Leukocytes")),
         (4, ("Plasma", "Leukocytes"))])
    PlasmaWasPrev = dict(
        [(4, ("Platelets", "Blood", "Plasma", "Erythrocytes", "Leukocytes")),
         (2, ("Blood", "Plasma",))])
    PlateletsWasPrev = dict([
        (4, ("Blood", "Plasma", "Platelets", "Erythrocytes", "Leukocytes"))])
    ErythrocytesWasPrev = dict(
        [(8, ("Blood", "Plasma", "Platelets", "Erythrocytes", "Leukocytes")),
         (4, ("Plasma", "Platelets", "Leukocytes"))])
    LeukocytesWasPrev = dict(
        [(4, ("Blood", "Plasma", "Platelets", "Erythrocytes", "Leukocytes"))])

    return {DonationModel.DONATIONTYPE.BLOOD: BloodWasPrev,
            DonationModel.DONATIONTYPE.PLASMA: PlasmaWasPrev,
            DonationModel.DONATIONTYPE.PLATELETS: PlateletsWasPrev,
            DonationModel.DONATIONTYPE.ERYTHROCYTES: ErythrocytesWasPrev,
            DonationModel.DONATIONTYPE.LEUKOCYTES: LeukocytesWasPrev}


def adjustToLawRules(whatCanBeDonated, user, today):
    usersDonations = DonationModel.objects.filter(donor=user).order_by('-time')
    bloodDonationsCounter = 0
    for usersDonation in usersDonations:
        if usersDonation.time.year == today.year and usersDonation.donationType == DonationModel.DONATIONTYPE.BLOOD:
            bloodDonationsCounter += 1
    if (user.is_male and bloodDonationsCounter >= 6) or (
            not user.is_male and bloodDonationsCounter >= 4):
        bloodIndex = whatCanBeDonated.index("Blood")
        whatCanBeDonated = whatCanBeDonated[:bloodIndex] + whatCanBeDonated[bloodIndex + 1:]
    return whatCanBeDonated


def sendEmails(users, today, itemsAbleToDonateDict):
    socket.setdefaulttimeout(180)

    host = settings.EMAIL_HOST
    sender = settings.EMAIL_HOST_USER
    passw = settings.EMAIL_HOST_PASSWORD

    server = smtplib.SMTP(host)
    server.ehlo()
    server.starttls()
    server.ehlo()
    server.login(sender, passw)
    for user in users:
        donation = DonationModel.objects.filter(donor=user).last()
        if donation is not None:
            difference = (today - donation.time).days / 7
            if difference == 2.0 or difference == 4.0 or difference == 8.0:
                try:
                    whatCanBeDonated = itemsAbleToDonateDict[donation.donationType][int(difference)]
                except KeyError:
                    pass
                else:
                    if "Blood" in whatCanBeDonated:
                        whatCanBeDonated = adjustToLawRules(whatCanBeDonated, user, today)
                    appendix = '\n\t-' + '\n\t-'.join(whatCanBeDonated) + '\n\n'
                    body = (
                        "Dear User,\n\n"
                        "It's been enough time since your last donation to regenerate the missing components in your blood.\n"
                        "You can now go back to the collection point and repeat your noble deed saving people's lives.\n"
                        "At this time, you can donate the following blood components:\n"
                        f"{appendix}"
                        "We encourage you to visit the nearest blood collection point.\n"
                        "You can recall its location on our website blooddonation.com.\n\n"
                        "Best regards,\n"
                        "BloodDonation team"
                    )
                    msg = MIMEMultipart()
                    msg['Subject'] = "BloodDonation - You can donate again"
                    msg['From'] = sender
                    msg['To'] = user.email
                    msg.attach(MIMEText(body, 'plain'))
                    text = msg.as_string()
                    server.sendmail(sender, user.email, text)
                    sleep(15)
    server.quit()
