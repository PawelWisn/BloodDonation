import django
from django.test import TestCase
from Main.models import *
import random
import os
import json
from time import sleep

from graphene_django.utils.testing import GraphQLTestCase


class TestUserModelQueries(GraphQLTestCase):
    def setUp(self):
        super().setUp()

    def test_create_localization_by_mutation_successful(self):
        response = self.query(
            '''
            mutation CreateUser{
              createUser(email:"someuser@gmail.com",password:"securepass"){
              user{   
                    email    
                    dateJoined
                    }
              }
            }
            ''', )
        self.assertResponseNoErrors(response)
        content = json.loads(response.content)
        assert content['data']['createUser'] is not None
        try:
            UserModel.objects.get(email='someuser@gmail.com')
        except UserModel.DoesNotExist:
            raise ValueError("Mutation could not create user!")

    def test_create_user_by_mutation_unsuccessful(self):
        randomEmail = "verylongandnotexpectedthatnooneprobablyhas@gmail.com"
        password = "secretpassword"
        UserModel.objects.create_user(email=randomEmail, password=password)
        with self.assertRaises(django.db.utils.IntegrityError):
            UserModel.objects.create_user(email=randomEmail, password=password + 'butother')


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
            ''', )
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
            ''', )
        self.assertResponseNoErrors(response)
        content = json.loads(response.content)
        assert len(locals) == len(content['data']['allLocalizations'])
        for fromDB, fromQ in zip(locals, content['data']['allLocalizations']):
            if fromDB.city != fromQ['city'] \
                    or fromDB.address != fromQ['address'] \
                    or fromDB.placeName != fromQ['placeName'] \
                    or fromDB.isMobilePoint != fromQ['isMobilePoint']:
                raise ValueError("Values returned by query are different than expected!")

    def test_all_localizations_filter_by_city(self):
        locals = LocalizationModel.objects.filter(city="Warszawa")
        response = self.query(
            '''
            query{
              allLocalizations(city: "Warszawa"){    
                    city    
                    placeName
                    address
                    isMobilePoint
              }
            }
            ''', )
        self.assertResponseNoErrors(response)
        content = json.loads(response.content)
        assert len(locals) == len(content['data']['allLocalizations'])
        for fromDB, fromQ in zip(locals, content['data']['allLocalizations']):
            if fromDB.city != fromQ['city'] \
                    or fromDB.address != fromQ['address'] \
                    or fromDB.placeName != fromQ['placeName'] \
                    or fromDB.isMobilePoint != fromQ['isMobilePoint']:
                raise ValueError("Values returned by query are different than expected!")

    def test_create_localization_by_mutation_successful(self):
        response = self.query(
            '''
            mutation CreateLocalization{
              createLocalization(city: "FakeCity",placeName:"RCKiK FakeCity", address:"Czarta 19"){ 
              localization{   
                    city    
                    placeName
                    address
                    isMobilePoint
                    }
              }
            }
            ''', )
        self.assertResponseNoErrors(response)
        content = json.loads(response.content)
        assert content['data']['createLocalization'] is not None
        assert LocalizationModel.objects.filter(city="FakeCity")
        content = content['data']['createLocalization']['localization']
        if content['city'] != "FakeCity" or content['address'] != "Czarta 19" or content[
            'placeName'] != "RCKiK FakeCity" \
                or content['isMobilePoint'] != False:
            raise ValueError("Values returned by query are different than expected!")

    def test_create_localization_by_mutation_unsuccessful(self):
        LocalizationModel(city="FakeRegion", placeName="RCKiK FakeRegion", address="Leona 5").save()
        response = self.query(
            '''
            mutation CreateLocalization{
              createLocalization(city: "FakeRegion",placeName:"RCKiK FakeRegion", address:"Andersa 2"){ 
              localization{   
                    city    
                    placeName
                    address
                    isMobilePoint
                    }
              }
            }
            ''', )
        self.assertResponseNoErrors(response)
        content = json.loads(response.content)
        assert content['data']['createLocalization'] is None
        assert LocalizationModel.objects.filter(city="FakeRegion").first().address == "Leona 5"


class TestBloodReservesModelQueries(GraphQLTestCase):
    def setUp(self):
        super().setUp()
        import Main.scripts.webScrapBloodReserves as wsbr
        wsbr.run()

    def test_blood_reserves_webscrapping_script_successful(self):
        assert len(BloodReservesModel.objects.all()) == 168


