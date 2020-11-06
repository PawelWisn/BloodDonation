import django
from django.test import TestCase
from Main.models import *
import random
import os
import json
from time import sleep

from graphene_django.utils.testing import GraphQLTestCase

class UserModelTestCase(TestCase):
    def test_emails_are_unique(self):
        randomEmail = "verylongandnotexpectedthatnooneprobablyhas@gmail.com"
        password = "secretpassword"
        UserModel.objects.create_user(email=randomEmail, password=password)
        with self.assertRaises(django.db.utils.IntegrityError):
            UserModel.objects.create_user(email=randomEmail, password=password+'butother')


class TestLocalizationQueries(GraphQLTestCase):
    def setUp(self):
        super().setUp()
        with open(r'collectionPoints.csv', 'r') as src:
            for line in src:
                city, name, address, isMobile = line.split(';')
                LocalizationModel(city=city, placeName=name, address=address, isMobilePoint=int(isMobile)).save()

    def test_all_localizations_query_returns_all_localizations(self):
        localsNum = len(LocalizationModel.objects.all())
        response = self.query(
            '''
            query{
              allLocalizations{    
                    city    
                    placeName
                    address
                    isMobilePoint
              }
            }
            ''',

        )
        self.assertResponseNoErrors(response)
        content = json.loads(response.content)
        assert localsNum == len(content['data']['allLocalizations'])

    def test_all_localizations_paging(self):
        locals = LocalizationModel.objects.all()[2:][:10]
        response = self.query(
            '''
            query{
              allLocalizations(recent:10,skip:2){    
                    city    
                    placeName
                    address
                    isMobilePoint
              }
            }
            ''',

        )
        self.assertResponseNoErrors(response)
        content = json.loads(response.content)
        print(len(locals),len(content['data']['allLocalizations']))
        print(locals[:3])
        print(content['data']['allLocalizations'][:3])
        assert content['data']['allLocalizations'] == locals

