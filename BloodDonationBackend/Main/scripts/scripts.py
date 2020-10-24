from datetime import date, datetime, timedelta
from Main.models import *
from django.utils import timezone
from django.core.mail import send_mail
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import socket

def run():
    BloodWasPrev = dict([(8, ("Blood", "Plasma", "Platelets",)), (4, ("Plasma",))])
    PlasmaWasPrev = dict([(4, ("Platelets", "Blood", "Plasma",)), (2, ("Blood", "Plasma",))])
    PlateletsWasPrev = dict([(4, ("Blood", "Plasma", "Platelets",))])

    waitingDict = {"BLD": BloodWasPrev, "PLM": PlasmaWasPrev, "PLT": PlateletsWasPrev}

    users = [u for u in UserModel.objects.all()]

    today = timezone.now()

    lastDonations = []
    for user in users:
        donation = DonationModel.objects.filter(donor=user).last()
        if donation is not None:
            lastDonations.append(donation)
    lastDonations = lastDonations[3:]
    for lastDonation in lastDonations:
        difference = (today - lastDonation.time).days / 7
        if difference == 2 or difference == 4 or difference == 8:
            try:
                whatCanBeDonated = waitingDict[lastDonation.donationType][difference]
            except KeyError:
                pass
            else:
                print("Can donate:", whatCanBeDonated)
        break

    socket.setdefaulttimeout(30)
    host = r'smtp.mail.yahoo.com'
    _from = r'blood.donation@yahoo.com'
    _to = r'wispawelwis38@gmail.com'
    _pass = r'ejtxsytjnctidgms'


    server = smtplib.SMTP(host)
    server.ehlo()
    server.starttls()
    server.ehlo()
    server.login(_from, _pass)
    from time import sleep
    for i in range(3):
        body = "Hello there, " + str(timezone.now())
        msg = MIMEMultipart()
        msg['Subject'] = "subject1"
        msg['From'] = _from
        msg['To'] = _to
        msg.attach(MIMEText(body, 'plain'))
        text = msg.as_string()
        server.sendmail(_from, _to, text)
        sleep(15)
    server.quit()

# for user in Tournament.objects.filter(tournament_start_date=date.today() + relativedelta(days=5)):
#
#     # find the players that are registered for the tournament
#     for player in tournament.registered_player_set():
#         send_mail(...)
