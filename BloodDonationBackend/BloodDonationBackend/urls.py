"""BloodDonationBackend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from Main.schemas.schemaDonations import schemaDonations
from Main.schemas.schemaLocalizations import schemaLocalizations
from Main.schemas.schemaReserves import schemaBloodReserves
from Main.schemas.schemaUsers import schemaUsers

urlpatterns = [
    path(r'admin/', admin.site.urls),
    path(r'users/', csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schemaUsers))),
    path(r'localizations/', csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schemaLocalizations))),
    path(r'donations/', csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schemaDonations))),
    path(r'reserves/', csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schemaBloodReserves))),
]
