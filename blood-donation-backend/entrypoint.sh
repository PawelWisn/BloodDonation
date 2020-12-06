#!/bin/sh

pip install graphene-django
pip install django-extensions
rm -rf Main/migrations/*
python manage.py makemigrations Main
python manage.py makemigrations
python manage.py migrate
echo "from Main.models import UserModel; UserModel.objects.create_superuser('admin@yahoo.com', 'admin');" | python manage.py shell

python manage.py runscript uploadLocsToDB
python manage.py runscript sendEmailReminders
python manage.py runscript webScrapBloodReserves
exec "$@"
