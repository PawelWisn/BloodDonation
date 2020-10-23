from datetime import date
from dateutil.relativedelta import relativedelta
from django.mail import send_mail  # I think this is right.
from Main.models import UserModel

def run():
    # find our tournaments that start five days from now.
    users = UserModel.objects.all()
    remindUsers = users.
    for user in Tournament.objects.filter(tournament_start_date=date.today() + relativedelta(days=5)):

        # find the players that are registered for the tournament
        for player in tournament.registered_player_set():
            send_mail(...)