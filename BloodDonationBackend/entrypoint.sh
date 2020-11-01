#!/bin/sh

sleep 1s
pip install graphene-django
pip install django-extensions
rm -rf Main/migrations/*
python manage.py makemigrations Main
python manage.py makemigrations
python manage.py migrate
echo "from Main.models import UserModel; UserModel.objects.create_superuser('admin@o2.pl', 'admin')" | python manage.py shell
echo "from Main.models import UserModel; UserModel.objects.create_user('kamil@gmail.com', 'kamil')" | python manage.py shell
echo "from Main.models import UserModel; UserModel.objects.create_user('jacek@o2.pl', 'jacek')" | python manage.py shell
echo "from Main.models import UserModel; UserModel.objects.create_user('witek@wp.pl', 'witek')" | python manage.py shell
echo "from Main.models import UserModel; UserModel.objects.create_user('jessica@yahoo.com', 'jessica', is_male=False)" | python manage.py shell
echo "from Main.models import UserModel; UserModel.objects.create_user('anna@wp.pl', 'anna', is_male=False)" | python manage.py shell
echo "from Main.models import UserModel; UserModel.objects.create_user('robert@yahoo.com', 'robert')" | python manage.py shell

python manage.py runscript uploadLocsToDB
sleep 1s
echo "from Main.models import *;from django.utils import timezone;users = UserModel.objects.all();locs = LocalizationModel.objects.all();DonationModel(donor=users[1],place=locs[0],donationType='BLD', amount=450,time=timezone.now()).save();
DonationModel(donor=users[2],place=locs[2],donationType='PLM', amount=450,time=timezone.now()).save();
DonationModel(donor=users[3],place=locs[3],donationType='ERT', amount=450,time=timezone.now()).save();" | python manage.py shell
python manage.py runscript sendEmailRemainders
exec "$@"
