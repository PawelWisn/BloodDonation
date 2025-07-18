import datetime

from django.conf import settings
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _

# Create your models here.


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(_("The Email must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        try:
            self.model.objects.get(email=email)
        except self.model.DoesNotExist:
            pass
        else:
            return None

        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(email, password, **extra_fields)


class LocalizationModel(models.Model):
    city = models.CharField(max_length=256)
    address = models.CharField(max_length=256, null=True, default="")
    place_name = models.CharField(max_length=256, default="", primary_key=True)
    is_mobile_point = models.BooleanField(default=False)
    latitude = models.CharField(max_length=20, default="")
    longitude = models.CharField(max_length=20, default="")

    def __str__(self):
        return self.place_name


class UserModel(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_("email address"), max_length=64, unique=True)
    password = models.CharField(max_length=128, default="")
    is_superuser = models.BooleanField(default=False)
    is_male = models.BooleanField(default=True)
    want_reminder = models.BooleanField(default=True)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class DonationModel(models.Model):
    class DONATIONTYPE(models.TextChoices):
        BLOOD = "BLD"
        PLASMA = "PLM"
        PLATELETS = "PLT"
        ERYTHROCYTES = "ERT"
        LEUKOCYTES = "LEU"

    donation_id = models.AutoField(primary_key=True)
    donor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    place = models.ForeignKey(LocalizationModel, on_delete=models.CASCADE)
    donation_type = models.CharField(choices=DONATIONTYPE.choices, default=DONATIONTYPE.BLOOD, max_length=3)
    amount = models.IntegerField(null=False)
    time = models.DateTimeField(null=True)

    def __str__(self):
        return str(self.donation_id) + "-" + str(self.time.year) + str(self.time.month) + str(self.time.day)


class BloodReservesModel(models.Model):
    BLOOD_GROUPS = [("Z_P", "Z_P"), ("Z_N", "Z_N"), ("A_P", "A_P"), ("A_N", "A_N"), ("B_N", "B_N"), ("B_P", "B_P"), ("AB_N", "AB_N"), ("AB_P", "AB_P")]

    id = models.AutoField(primary_key=True)
    region = models.CharField(max_length=64)
    volume = models.IntegerField(default=0)
    group = models.CharField(choices=BLOOD_GROUPS, max_length=4)

    def __str__(self):
        return str(self.id) + "-" + self.region + "-" + self.group
