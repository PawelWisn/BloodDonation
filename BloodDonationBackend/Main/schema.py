import graphene
from graphene_django import DjangoObjectType
from Main.models import *
from graphene_django.filter import DjangoFilterConnectionField

class User(DjangoObjectType):
    class Meta:
        model = UserModel
        fields = ("email", "date_joined", 'is_superuser', 'is_staff', 'is_active', 'donatedBlood','donatedPlasma', 'donatedPlatelets', 'lastDonationTime')
        filter_fields = ['is_staff']

class QueryUser(graphene.ObjectType):
    all_users = graphene.List(User)
    staff_status = graphene.List(User, is_staff=graphene.Boolean(required=False))
    def resolve_all_users(self, info):
        return UserModel.objects.all()
    def resolve_staff_status(self, info, is_staff=False):
        return UserModel.objects.filter(is_staff=is_staff)

class Localization(DjangoObjectType):
    class Meta:
        model = LocalizationModel
        fields = ("city",'addressLine1','addressLine2', 'placeName', 'isMobilePoint')

class QueryLocalization(graphene.ObjectType):
    all_localizations= graphene.List(Localization)
    city = graphene.List(Localization, city=graphene.String(required=False),placeName=graphene.String(required=False))
    def resolve_all_localizations(self, info):
        return LocalizationModel.objects.all()
    def resolve_city(self, info, city):
        return LocalizationModel.objects.filter(city=city)
    def resolve_place_name(self, info, placeName):
        return LocalizationModel.objects.filter(placeName=placeName)


LocalizationSchema = graphene.Schema(query=QueryLocalization)
UserSchema = graphene.Schema(query=QueryUser)