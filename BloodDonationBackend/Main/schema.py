import graphene
from graphene_django import DjangoObjectType
from Main.models import *
from django.utils import timezone
from datetime import datetime
import graphql_jwt


class UserType(DjangoObjectType):
    class Meta:
        model = UserModel
        fields = ("email", "date_joined", 'is_superuser', 'is_staff', 'is_active', 'donatedBlood', 'donatedPlasma',
                  'donatedPlatelets', 'donatedLeukocytes', 'donatedErythrocytes', 'is_male')


class LocalizationType(DjangoObjectType):
    class Meta:
        model = LocalizationModel
        fields = ("city", 'address', 'placeName', 'isMobilePoint')


class DonationType(DjangoObjectType):
    class Meta:
        model = DonationModel
        fields = ("donation_id", "donor", 'place', 'donationType', 'amount', 'time')


class Query(graphene.ObjectType):
    all_localizations = graphene.List(LocalizationType, recent=graphene.Int(), skip=graphene.Int(),
                                      mobile=graphene.Boolean(), city=graphene.String())
    # city = graphene.Field(LocalizationType, city=graphene.String(required=True))

    me = graphene.Field(UserType)

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')
        return user

    def resolve_all_localizations(self, info, recent=1000, skip=0, city=None, mobile=None):
        out = LocalizationModel.objects.all()
        if city:
            out = out.filter(city=city)
        if mobile:
            out = out.filter(isMobilePoint=mobile)
        return out[skip:][:recent]


    all_users = graphene.List(UserType)  ##

    def resolve_all_users(self, info):  ##
        print( UserModel.objects.all())
        return UserModel.objects.all()  ##


    all_donations = graphene.List(DonationType)  ##
    donation_by_type = graphene.List(DonationType, donationType=graphene.String(required=True))  ##
    donation_with_user = graphene.List(DonationType, donor=graphene.String(required=True), recent=graphene.Int(),
                                       skip=graphene.Int())

    def resolve_all_donations(self, info):  ##
        return DonationModel.objects.all()  ##

    def resolve_donation_by_type(self, info, donationType):  ##
        return DonationModel.objects.filter(donationType=donationType)  ##

    def resolve_donation_with_user(self, info, donor, recent=2000, skip=0):
        if info.context.user.is_anonymous:
            raise Exception('Not logged in!')
        try:
            user = UserModel.objects.get(email=donor)
        except UserModel.DoesNotExist:
            return None
        return DonationModel.objects.filter(donor=user).order_by('-time')[skip:][:recent]


class ApplyDonationMutation(graphene.Mutation):
    class Arguments:
        email = graphene.String(required=True)
        donatedAmount = graphene.String(required=True)
        donatedType = graphene.String(required=True)
        time = graphene.String(required=False)
        city = graphene.String(required=True)
        placeName = graphene.String(required=True)
        address = graphene.String(required=False)
        isMobilePoint = graphene.Boolean(required=False)

    donation = graphene.Field(DonationType)

    def mutate(self, info, email, donatedAmount, donatedType, city, placeName, time=None, address='',
               isMobilePoint=False):
        if info.context.user.is_anonymous:
            raise Exception('Not logged in!')
        try:
            user = UserModel.objects.get(email=email)
        except UserModel.DoesNotExist:
            return None
        if donatedType == DonationModel.DONATIONTYPE.BLOOD:
            user.donatedBlood += int(donatedAmount)
        elif donatedType == DonationModel.DONATIONTYPE.PLASMA:
            user.donatedPlasma += int(donatedAmount)
        elif donatedType == DonationModel.DONATIONTYPE.PLATELETS:
            user.donatedPlatelets += int(donatedAmount)
        elif donatedType == DonationModel.DONATIONTYPE.ERYTHROCYTES:
            user.donatedErythrocytes += int(donatedAmount)
        elif donatedType == DonationModel.DONATIONTYPE.LEUKOCYTES:
            user.donatedLeukocytes += int(donatedAmount)
        else:
            return None
        user.save()
        try:
            localization = LocalizationModel.objects.get(placeName=placeName)
        except LocalizationModel.DoesNotExist:
            localization = LocalizationModel(city=city, placeName=placeName, address=address,
                                             isMobilePoint=isMobilePoint)
            localization.save()
        time = datetime.fromisoformat(time) if time else timezone.now()
        donation = DonationModel(donor=user, place=localization, donationType=donatedType, amount=donatedAmount,
                                 time=time)
        donation.save()
        return ApplyDonationMutation(donation=donation)


class CreateUserMutation(graphene.Mutation):
    class Arguments:
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    user = graphene.Field(UserType)

    def mutate(self, info, email, password):
        try:
            UserModel.objects.get(email=email)
        except UserModel.DoesNotExist:
            user = UserModel.objects.create_user(email=email, password=password)
            user.save()
            return CreateUserMutation(user=user)
        else:
            return None


class Mutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    apply_donation = ApplyDonationMutation.Field()
    create_user = CreateUserMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
