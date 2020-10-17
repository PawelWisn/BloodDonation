import graphene
from graphene_django import DjangoObjectType
from Main.models import *

class Localization(DjangoObjectType):
    class Meta:
        model = LocalizationModel
        fields = ("city","country",'addressLine1','addressLine2', 'placeName', 'isMobilePoint')

class QueryLocalization(graphene.ObjectType):
    all_localizations= graphene.List(Localization)
    def resolve_all_localizations(self, info):
        return LocalizationModel.objects.all()


LocalizationSchema = graphene.Schema(query=QueryLocalization)