import os


def run():
    os.system("python manage.py runscript sendEmailRemainders")
    os.system("python manage.py runscript webScrapBloodReserves")


