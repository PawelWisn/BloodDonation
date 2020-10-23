import graphene
from graphene_django import DjangoObjectType
from Main.models import *
from graphene_django.filter import DjangoFilterConnectionField


class UserType(DjangoObjectType):
    class Meta:
        model = UserModel
        fields = ("email", "date_joined", 'is_superuser', 'is_staff', 'is_active', 'donatedBlood', 'donatedPlasma',
                  'donatedPlatelets', 'lastDonationTime')


class LocalizationType(DjangoObjectType):
    class Meta:
        model = LocalizationModel
        fields = ("city", 'addressLine1', 'addressLine2', 'placeName', 'isMobilePoint')


class DonationType(DjangoObjectType):
    class Meta:
        model = DonationModel
        fields = ("donor", 'place', 'donationType', 'amount', 'time')


class Query(graphene.ObjectType):
    all_localizations = graphene.List(LocalizationType)
    city = graphene.Field(LocalizationType, city=graphene.String(required=True))

    def resolve_all_localizations(self, info):
        return LocalizationModel.objects.all()

    def resolve_city(self, info, city):
        return LocalizationModel.objects.filter(city=city).first()

    all_users = graphene.List(UserType)
    is_staff = graphene.List(UserType, is_staff=graphene.Boolean(required=True))

    def resolve_all_users(self, info):
        return UserModel.objects.all()

    def resolve_is_staff(self, info, is_staff):
        return UserModel.objects.filter(is_staff=is_staff)

    all_donations = graphene.List(DonationType)
    donation_by_type = graphene.List(DonationType, donationType=graphene.String(required=True))
    donation_with_user = graphene.List(DonationType, donor=graphene.String(required=True))

    def resolve_all_donations(self, info):
        return DonationModel.objects.all()

    def resolve_donation_by_type(self, info, donationType):
        return DonationModel.objects.filter(donationType=donationType)

    def resolve_donation_with_user(self, info, donor):
        try:
            user = UserModel.objects.get(email=donor)
        except UserModel.DoesNotExist:
            return None
        return DonationModel.objects.filter(donor=user)

# class Mutation(graphene.ObjectType):
#     pass

# schema = graphene.Schema(query=Query, mutation=Mutation)
schema = graphene.Schema(query=Query)
