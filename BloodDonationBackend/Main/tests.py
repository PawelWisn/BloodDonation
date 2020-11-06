import django
from django.test import TestCase
from Main.models import *


class UserModelTestCase(TestCase):
    def test_emails_are_unique(self):
        UserModel.objects.create_user(email="testing@gmail.com", password="abcd")
        with self.assertRaises(django.db.utils.IntegrityError):
            UserModel.objects.create_user(email="testing@gmail.com", password="fwafwa")
