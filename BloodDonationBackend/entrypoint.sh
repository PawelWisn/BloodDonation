#!/bin/sh

sleep 1s
pip install graphene-django
pip install django-extensions
rm -rf Main/migrations/*
python manage.py makemigrations Main
python manage.py makemigrations
python manage.py migrate
echo "from Main.models import UserModel; UserModel.objects.create_superuser('admin@o2.pl', 'admin')" | python manage.py shell

exec "$@"
