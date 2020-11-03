import graphene
from graphene_django import DjangoObjectType
from Main.models import *
from django.utils import timezone
from datetime import datetime
import graphql_jwt
from .schemaUsers import UserType
from .schemaLocalizations import LocalizationType
from graphql_jwt.decorators import login_required

class DonationType(DjangoObjectType):
    class Meta:
        model = DonationModel
        fields = ("donation_id", "donor", 'place', 'donationType', 'amount', 'time')


class QueryDonations(graphene.ObjectType):
    all_donations = graphene.List(DonationType)  ##
    donation_by_type = graphene.List(DonationType, donationType=graphene.String(required=True))  ##
    donation_with_user = graphene.List(DonationType, recent=graphene.Int(), skip=graphene.Int())

    def resolve_all_donations(self, info):  ##
        return DonationModel.objects.all()  ##

    def resolve_donation_by_type(self, info, donationType):  ##
        return DonationModel.objects.filter(donationType=donationType)  ##

    @login_required
    def resolve_donation_with_user(self, info, recent=2000, skip=0):
        user = info.context.user
        try:
            user = UserModel.objects.get(email=user.email)
        except UserModel.DoesNotExist:
            return None
        return DonationModel.objects.filter(donor=user).order_by('-time')[skip:][:recent]


class ApplyDonationMutation(graphene.Mutation):
    class Arguments:
        donatedAmount = graphene.String(required=True)
        donatedType = graphene.String(required=True)
        time = graphene.String(required=False)
        city = graphene.String(required=True)
        placeName = graphene.String(required=True)
        address = graphene.String(required=False)
        isMobilePoint = graphene.Boolean(required=False)

    donation = graphene.Field(DonationType)

    @login_required
    def mutate(self, info, donatedAmount, donatedType, city, placeName, time=None, address='',
               isMobilePoint=False):
        user = info.context.user
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


class MutationDonations(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    apply_donation = ApplyDonationMutation.Field()


schemaDonations = graphene.Schema(query=QueryDonations, mutation=MutationDonations)
