import os


def run():
    os.system("python manage.py runscript webScrapBloodReserves")
    os.system("python manage.py runscript sendEmailReminders")
