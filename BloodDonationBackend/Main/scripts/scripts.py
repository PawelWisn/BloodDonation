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
    BloodWasPrev = dict([(8, ("Blood", "Plasma", "Platelets",)), (4, ("Plasma",))])
    PlasmaWasPrev = dict([(4, ("Platelets", "Blood", "Plasma",)), (2, ("Blood", "Plasma",))])
    PlateletsWasPrev = dict([(4, ("Blood", "Plasma", "Platelets",))])

    waitingDict = {"BLD": BloodWasPrev, "PLM": PlasmaWasPrev, "PLT": PlateletsWasPrev}

    users = [user for user in UserModel.objects.all()]

    today = timezone.now()

    socket.setdefaulttimeout(120)

    host = settings.EMAIL_HOST
    # host = r'smtp.mail.yahoo.com'
    _from = settings.EMAIL_HOST_USER
    # _from = r'blood.donation@yahoo.com'
    # _pass = r'ejtxsytjnctidgms'
    _pass = settings.EMAIL_HOST_PASSWORD

    server = smtplib.SMTP(host)
    server.ehlo()
    server.starttls()
    server.ehlo()
    server.login(_from, _pass)
    for user in users:
        donation = DonationModel.objects.filter(donor=user).last()
        if donation is not None:
            difference = (today - donation.time).days / 7
            if difference == 2.0 or difference == 4.0 or difference == 8.0:
                try:
                    whatCanBeDonated = waitingDict[donation.donationType][int(difference)]
                except KeyError:
                    pass
                else:
                    appendix = '\n\t-'.join(whatCanBeDonated) + '\n\n'
                    body = (
                        "Dear User,\n\n"
                        "It's been enough time since your last donation to regenerate the missing components in your blood.\n"
                        "You can now go back to the collection point and repeat your noble deed saving people's lives.\n"
                        "At this time, you can donate the following blood components:\n"
                        f"\n\t-{appendix}"
                        "We encourage you to visit the nearest blood collection point.\n"
                        "You can recall its location on our website blooddonation.com.\n\n"
                        "Best regards,\n"
                        "BloodDonation team"
                    )
                    msg = MIMEMultipart()
                    msg['Subject'] = "BloodDonation - You can donate again"
                    msg['From'] = _from
                    msg['To'] = user.email
                    msg.attach(MIMEText(body, 'plain'))
                    text = msg.as_string()
                    server.sendmail(_from, user.email, text)
                    sleep(15)
    server.quit()
