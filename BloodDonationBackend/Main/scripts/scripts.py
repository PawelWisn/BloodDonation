from datetime import date, datetime, timedelta
# from django.mail import send_mail  # I think this is right.
from Main.models import *
from django.utils import timezone


def run():
    waitingTime = {"bld-bld": 8, "bld-plm": 4, "bld-plt": 8, "plm-bld": 2, "plm-plm": 2, "plm-plt": 4, "plt-bld": 4,
                   "plt-plm": 4, "plt-plt": 4}

    BloodWasPrev = dict([(8, ("Blood", "Plasma", "Platelets",)), (4, ("Plasma",))])
    PlasmaWasPrev = dict([(4, ("Platelets","Blood", "Plasma",)), (2, ("Blood", "Plasma",))])
    PlateletsWasPrev = dict([(4, ("Blood", "Plasma", "Platelets",))])

    waitingDict = {"BLD": BloodWasPrev, "PLM": PlasmaWasPrev, "PLT": PlateletsWasPrev}

    users = [u for u in UserModel.objects.all()]

    today = timezone.now()

    lastDonations = []
    for user in users:
        donation = DonationModel.objects.filter(donor=user).last()
        if donation is not None:
            lastDonations.append(donation)
    lastDonations = lastDonations[1:]
    for lastDonation in lastDonations:
        print(lastDonation.donationType)
        difference = (today - lastDonation.time).days / 7
        future = date.fromisoformat("2020-10-30")
        last = date.fromisoformat("2020-10-01")
        difference =  (future - last).days / 7
        print(difference)
        if difference == 2 or difference == 4 or difference == 8:
            try:
                whatCanBeDonated = waitingDict[lastDonation.donationType][difference]
            except KeyError:
                pass
            else:
                print("Can donate:", whatCanBeDonated)
        break

    # for user in Tournament.objects.filter(tournament_start_date=date.today() + relativedelta(days=5)):
    #
    #     # find the players that are registered for the tournament
    #     for player in tournament.registered_player_set():
    #         send_mail(...)
