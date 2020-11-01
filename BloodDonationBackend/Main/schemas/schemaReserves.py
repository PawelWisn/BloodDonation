import graphene
from graphene_django import DjangoObjectType
from Main.models import *
from django.utils import timezone
from datetime import datetime
import graphql_jwt


class BloodReservesType(DjangoObjectType):
    class Meta:
        model = BloodReservesModel
        fields = ('bloodReserveID',"region", 'volume', 'group')


class QueryBloodReserves(graphene.ObjectType):
    all_reserves = graphene.List(BloodReservesType, region=graphene.String(), group=graphene.String())

    bloodReserves = graphene.Field(BloodReservesType)

    def resolve_all_reserves(self, info, region=None, group=None):
        out = BloodReservesModel.objects.all()
        print(out)
        if region:
            out = out.filter(region=region)
        if group:
            out = out.filter(group=group)
        return out.order_by("region")



schemaBloodReserves = graphene.Schema(query=QueryBloodReserves)
