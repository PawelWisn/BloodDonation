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
echo "from Main.models import UserModel; UserModel.objects.create_user('robert@yahoo.com', 'robert')" | python manage.py shell
echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Wroclaw',placeName='Regionalne Centrum Krwiodawstwa i Krwiolecznictwa', address='Czerwonego Krzyza 5/9')" | python manage.py shell
echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Wroclaw',placeName='Wojskowe Centrum Krwiodawstwa i Krwiolecznictwa', address='Rudolfa Weigla 5', isMobilePoint=True)" | python manage.py shell
echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Krakow',placeName='Wojskowe Centrum Krwiodawstwa i Krwiolecznictwa',address='Wroclawska 1', isMobilePoint=True)" | python manage.py shell
echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Wroclaw',placeName='Regionalne Centrum Krwiodawstwa i Krwiolecznictwa',address='Augustyna Kosnego 55')" | python manage.py shell
echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Warsaw',placeName='Centrum Krwiodawstwa i Krwiolecznictwa Ministerstwa Spraw Wewnetrznych', address='Woloska 137')" | python manage.py shell
echo "from Main.models import *;from django.utils import timezone;users = UserModel.objects.all();locs = LocalizationModel.objects.all();DonationModel(donor=users[1],place=locs[0],donationType='BLD', amount=450,time=timezone.now()).save();
DonationModel(donor=users[2],place=locs[2],donationType='PLM', amount=450,time=timezone.now()).save();
DonationModel(donor=users[3],place=locs[3],donationType='PLT', amount=450,time=timezone.now()).save();" | python manage.py shell

sleep 5s
python manage.py runscript sendEmailRemainders
exec "$@"
