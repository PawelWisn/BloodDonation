from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(UserModel)
admin.site.register(LocalizationModel)
admin.site.register(DonationModel)
admin.site.register(BloodReservesModel)