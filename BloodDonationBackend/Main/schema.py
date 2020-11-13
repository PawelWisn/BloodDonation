import graphene
from graphene_django import DjangoObjectType
from Main.models import *
from django.utils import timezone
from datetime import datetime
import graphql_jwt
from graphql_jwt.decorators import login_required


class UserType(DjangoObjectType):
    class Meta:
        model = UserModel
        fields = ("email", "date_joined", 'is_active', 'is_male', 'want_reminder')


class BloodReservesType(DjangoObjectType):
    class Meta:
        model = BloodReservesModel
        fields = ('bloodReserveID', "region", 'volume', 'group')


class LocalizationType(DjangoObjectType):
    class Meta:
        model = LocalizationModel
        fields = ("city", 'address', 'placeName', 'isMobilePoint', 'latitude', 'longitude')


class DonationType(DjangoObjectType):
    class Meta:
        model = DonationModel
        fields = ("donationID", "donor", 'place', 'donationType', 'amount', 'time')


class Query(graphene.ObjectType):
    me = graphene.Field(UserType)

    @login_required
    def resolve_me(self, info):
        return info.context.user

    all_reserves = graphene.List(BloodReservesType, region=graphene.String(), group=graphene.String())

    def resolve_all_reserves(self, info, region=None, group=None):
        out = BloodReservesModel.objects.all()
        if region:
            out = out.filter(region=region)
        if group:
            out = out.filter(group=group)
        return out.order_by("region", 'group')

    all_localizations = graphene.List(LocalizationType, recent=graphene.Int(), skip=graphene.Int(),
                                      mobile=graphene.Boolean(), city=graphene.String())

    def resolve_all_localizations(self, info, recent=2000, skip=0, city=None, mobile=None):
        out = LocalizationModel.objects.all()
        if city:
            out = out.filter(city=city)
        if mobile:
            out = out.filter(isMobilePoint=mobile)
        return out[skip:][:recent]

    donation_with_user = graphene.List(DonationType, recent=graphene.Int(), skip=graphene.Int())

    @login_required
    def resolve_donation_with_user(self, info, recent=2000, skip=0):
        user = info.context.user
        try:
            user = UserModel.objects.get(email=user.email)
        except UserModel.DoesNotExist:
            return None
        return DonationModel.objects.filter(donor=user).order_by('-time', '-donationID')[skip:][:recent]


class CreateUserMutation(graphene.Mutation):
    class Arguments:
        email = graphene.String(required=True)
        password = graphene.String(required=True)
        isMale = graphene.Boolean()

    user = graphene.Field(UserType)

    def mutate(self, info, email, password, isMale=True):
        try:
            UserModel.objects.get(email=email)
        except UserModel.DoesNotExist:
            user = UserModel.objects.create_user(email=email, password=password, is_male=isMale)
            user.save()
            return CreateUserMutation(user=user)
        else:
            return None


class CreateLocalizationMutation(graphene.Mutation):
    class Arguments:
        city = graphene.String(required=True)
        address = graphene.String(required=True)
        placeName = graphene.String(required=True)
        isMobilePoint = graphene.Boolean()

    localization = graphene.Field(LocalizationType)

    def mutate(self, info, city, address, placeName, isMobilePoint=False):
        try:
            LocalizationModel.objects.get(placeName=placeName)
        except LocalizationModel.DoesNotExist:
            localization = LocalizationModel(city=city, address=address, placeName=placeName,
                                             isMobilePoint=isMobilePoint)
            localization.save()
            return CreateLocalizationMutation(localization=localization)
        else:
            return None


class ApplyDonationMutation(graphene.Mutation):
    class Arguments:
        donatedAmount = graphene.String(required=True)
        donatedType = graphene.String(required=True)
        time = graphene.String(required=False)
        city = graphene.String(required=True)
        placeName = graphene.String(required=True)
        address = graphene.String(required=False)
        isMobilePoint = graphene.Boolean(required=False)
        wantReminder = graphene.Boolean(required=False)

    donation = graphene.Field(DonationType)

    @login_required
    def mutate(self, info, donatedAmount, donatedType, city, placeName, time=None, address='',
               isMobilePoint=False, wantReminder=True):

        if donatedType not in ('BLD','PLT','ERT','PLM','LEU'):
            return None
        user = info.context.user
        user.want_reminder = wantReminder
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


class Mutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    create_user = CreateUserMutation.Field()
    create_localization = CreateLocalizationMutation.Field()
    apply_donation = ApplyDonationMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
