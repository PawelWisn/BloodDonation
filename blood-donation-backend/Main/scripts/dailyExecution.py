import os


def run():
    print("Running daily execution scripts...", flush=True)
    os.system("python manage.py runscript webScrapBloodReserves")
    os.system("python manage.py runscript sendEmailReminders")
    print("Daily execution scripts completed.", flush=True)
