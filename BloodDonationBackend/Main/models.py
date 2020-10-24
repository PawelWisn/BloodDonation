from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.conf import settings
import datetime
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
# Create your models here.

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)

class LocalizationModel(models.Model):
    localization_id = models.AutoField(primary_key=True)
    city = models.CharField(max_length=256)
    address = models.CharField(max_length=256, null=True, default='')
    placeName = models.CharField(max_length=256, default='')
    isMobilePoint = models.BooleanField(default=False)

    def __str__(self):
        return self.placeName



class UserModel(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), max_length=64, unique=True)
    password = models.CharField(max_length=128, default='')
    date_joined = models.DateTimeField(default=timezone.now)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    donatedBlood = models.IntegerField(default=0)
    donatedPlasma = models.IntegerField(default=0)
    donatedPlatelets = models.IntegerField(default=0)

    objects = CustomUserManager()

    def __str__(self):
        return self.email



class DonationModel(models.Model):
    class DONATIONTYPE(models.TextChoices):
        BLOOD = "BLD"
        PLASMA = "PLM"
        PLATELETS = "PLT"

    donation_id = models.AutoField(primary_key=True)
    donor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    place = models.ForeignKey(LocalizationModel, on_delete=models.CASCADE)
    donationType = models.CharField(choices=DONATIONTYPE.choices, default=DONATIONTYPE.BLOOD ,max_length=3)
    amount = models.IntegerField(null=False)
    time = models.DateTimeField(null=True)

    def __str__(self):
        return str(self.donation_id)
    

