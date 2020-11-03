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
        fields = ("email", "date_joined", 'is_superuser', 'is_staff', 'is_active', 'donatedBlood', 'donatedPlasma',
                  'donatedPlatelets', 'donatedLeukocytes', 'donatedErythrocytes', 'is_male')


class QueryUsers(graphene.ObjectType):
    me = graphene.Field(UserType)
    all_users = graphene.List(UserType)  ##

    @login_required
    def resolve_me(self, info):
        return info.context.user

    def resolve_all_users(self, info):  ##
        return UserModel.objects.all()  ##


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


class MutationUsers(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    create_user = CreateUserMutation.Field()


schemaUsers = graphene.Schema(query=QueryUsers, mutation=MutationUsers)
