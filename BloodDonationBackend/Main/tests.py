import django
from django.test import TestCase
from Main.models import *
import random

class UserModelTestCase(TestCase):
    def test_emails_are_unique(self):
        randomEmail = "verylongandnotexpectedthatnooneprobablyhas@gmail.com"
        password = "secretpassword"
        UserModel.objects.create_user(email=randomEmail, password=password)
        with self.assertRaises(django.db.utils.IntegrityError):
            UserModel.objects.create_user(email=randomEmail, password=password+'butother')

