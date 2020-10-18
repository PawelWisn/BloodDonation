import graphene
from graphene_django import DjangoObjectType
from Main.models import *
from graphene_django.filter import DjangoFilterConnectionField


class UserNode(DjangoObjectType):
    class Meta:
        model = UserModel
        fields = ("email", "date_joined", 'is_superuser', 'is_staff', 'is_active', 'donatedBlood', 'donatedPlasma',
                  'donatedPlatelets', 'lastDonationTime')
        filter_fields = ['is_staff', 'date_joined', 'is_active']
        interfaces = (graphene.relay.Node,)


class LocalizationNode(DjangoObjectType):
    class Meta:
        model = LocalizationModel
        fields = ("city", 'addressLine1', 'addressLine2', 'placeName', 'isMobilePoint')
        filter_fields = ["city", 'addressLine1', 'addressLine2', 'placeName', 'isMobilePoint']
        interfaces = (graphene.relay.Node,)


class Query(graphene.ObjectType):
    city = graphene.relay.Node.Field(LocalizationNode)
    all_localizations = DjangoFilterConnectionField(LocalizationNode)

    is_staff = graphene.relay.Node.Field(UserNode)
    all_users = DjangoFilterConnectionField(UserNode)




schema = graphene.Schema(query=Query)
