#!/bin/sh

pip install graphene-django
pip install django-extensions
rm -rf Main/migrations/*
python manage.py makemigrations Main
python manage.py makemigrations
python manage.py migrate
echo "from Main.models import UserModel; UserModel.objects.create_superuser('admin@o2.pl', 'admin');UserModel.objects.create_user('wispawelwis38@gmail.com', 'emusia');UserModel.objects.create_user('jacek@o2.pl', 'jacek');UserModel.objects.create_user('witek@wp.pl', 'witek');UserModel.objects.create_user('jessica@yahoo.com', 'jessica', is_male=False);UserModel.objects.create_user('anna@wp.pl', 'anna', is_male=False);UserModel.objects.create_user('robert@yahoo.com', 'robert');" | python manage.py shell

python manage.py runscript uploadLocsToDB

echo "from Main.models import *;
from django.utils import timezone;
from datetime import datetime;
users = UserModel.objects.all();
locs = LocalizationModel.objects.all();
DonationModel(donor=users[1],place=locs[5],donationType='BLD', amount=450,time=timezone.now()).save();
DonationModel(donor=users[1],place=locs[6],donationType='BLD', amount=450,time=timezone.now()).save();
DonationModel(donor=users[1],place=locs[123],donationType='BLD', amount=450,time=timezone.now()).save();
DonationModel(donor=users[1],place=locs[52],donationType='BLD', amount=450,time=timezone.now()).save();
DonationModel(donor=users[1],place=locs[2],donationType='BLD', amount=450,time=timezone.now()).save();
DonationModel(donor=users[1],place=locs[7],donationType='BLD', amount=450,time=datetime.fromisoformat('2020-09-06')).save();
DonationModel(donor=users[2],place=locs[2],donationType='PLM', amount=450,time=timezone.now()).save();
DonationModel(donor=users[2],place=locs[5],donationType='ERT', amount=600,time=timezone.now()).save();
DonationModel(donor=users[2],place=locs[18],donationType='LEU', amount=300,time=timezone.now()).save();
DonationModel(donor=users[2],place=locs[18],donationType='LEU', amount=300,time=timezone.now()).save();
DonationModel(donor=users[2],place=locs[18],donationType='LEU', amount=300,time=timezone.now()).save();
DonationModel(donor=users[3],place=locs[3],donationType='ERT', amount=450,time=timezone.now()).save();" | python manage.py shell

python manage.py runscript sendEmailRemainders
exec "$@"
