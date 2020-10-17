#!/bin/sh

sleep 1s
pip install graphene-django
#python manage.py flush
python manage.py makemigrations 
python manage.py makemigrations Main
python manage.py migrate
echo "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', 'admin')" | python manage.py shell

exec "$@"
