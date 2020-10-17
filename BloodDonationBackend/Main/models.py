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
    city = models.CharField(max_length=256)
    country = models.CharField(max_length=256)
    addressLine1 = models.CharField(max_length=256, null=True)
    addressLine2 = models.CharField(max_length=256, null=True)
    placeName = models.CharField(max_length=256, null=True)
    isMobilePoint = models.BooleanField(default=False)



class UserModel(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), max_length=64, unique=True)
    salt = models.CharField(max_length=64, default='')
    password = models.CharField(max_length=128, default='')
    date_joined = models.DateTimeField(default=datetime.datetime.now)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    donatedBlood = models.FloatField(default=0.0)
    donatedPlasma = models.FloatField(default=0.0)
    donatedPlatelets = models.FloatField(default=0.0)
    lastDonationTime = models.DateTimeField(null=True)

    objects = CustomUserManager()

    def __str__(self):
        return self.email



class DonationModel(models.Model):
    class DONATIONTYPE(models.TextChoices):
        BLD = "Blood"
        PLM = "Plasma"
        PLT = "Platelets"

    donor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    place = models.ForeignKey(LocalizationModel, on_delete=models.CASCADE)
    donationType = models.CharField(choices=DONATIONTYPE.choices, default=DONATIONTYPE.BLD ,max_length=50)
    amount = models.FloatField(null=False)
    time = models.DateTimeField(null=True)
    

