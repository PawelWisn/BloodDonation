import graphene
from graphene_django import DjangoObjectType
from Main.models import *
from django.utils import timezone
from datetime import datetime
import graphql_jwt


class LocalizationType(DjangoObjectType):
    class Meta:
        model = LocalizationModel
        fields = ("city", 'address', 'placeName', 'isMobilePoint')


class QueryLocalizations(graphene.ObjectType):
    all_localizations = graphene.List(LocalizationType, recent=graphene.Int(), skip=graphene.Int(),
                                      mobile=graphene.Boolean(), city=graphene.String())

    def resolve_all_localizations(self, info, recent=1000, skip=0, city=None, mobile=None):
        out = LocalizationModel.objects.all()
        if city:
            out = out.filter(city=city)
        if mobile:
            out = out.filter(isMobilePoint=mobile)
        return out[skip:][:recent]


class CreateLocalizationMutation(graphene.Mutation):
    class Arguments:
        city = graphene.String(required=True)
        address = graphene.String(required=True)
        placeName = graphene.String(required=True)
        isMobilePoint = graphene.Boolean()

    localization = graphene.Field(LocalizationType)

    def mutate(self, info, city, address, placeName, isMobilePoint=None):
        try:
            LocalizationModel.objects.get(placeName=placeName)
        except LocalizationModel.DoesNotExist:
            isMobilePoint = isMobilePoint or False
            localization = LocalizationModel(city=city, address=address, placeName=placeName,
                                             isMobilePoint=isMobilePoint)
            localization.save()
            return CreateLocalizationMutation(localization=localization)
        else:
            return None


class MutationLocalizations(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    create_localization = CreateLocalizationMutation.Field()


schemaLocalizations = graphene.Schema(query=QueryLocalizations, mutation=CreateLocalizationMutation)
