from django.db import models

# Create your models here.


class LocalizationModel(models.Model):
    city = models.CharField(max_length=256)
    country = models.CharField(max_length=256)
    addressLine1 = models.CharField(max_length=256, null=True)
    addressLine2 = models.CharField(max_length=256, null=True)
    placeName = models.CharField(max_length=256, null=True)
    isMobilePoint = models.BooleanField(default=False)



class UserModel(models.Model):
    firstName = models.CharField(max_length=64)
    lastName = models.CharField(max_length=256)
    email = models.CharField(max_length=64)
    salt = models.CharField(max_length=64)
    hashedPassword = models.CharField(max_length=128)
    donatedBlood = models.FloatField(default=0.0)
    donatedPlasma = models.FloatField(default=0.0)
    donatedPlatelets = models.FloatField(default=0.0)
    lastDonationTime = models.DateTimeField(null=True)



class DonationModel(models.Model):
    class DONATIONTYPE(models.TextChoices):
        BLD = "Blood"
        PLM = "Plasma"
        PLT = "Platelets"

    donor = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    place = models.ForeignKey(LocalizationModel, on_delete=models.CASCADE)
    donationType = models.CharField(choices=DONATIONTYPE.choices, default=DONATIONTYPE.BLD ,max_length=50)
    amount = models.FloatField(null=False)
    time = models.DateTimeField(null=True)
    

