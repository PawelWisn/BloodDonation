# Generated by Django 3.1.1 on 2020-10-17 22:04

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='LocalizationModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('city', models.CharField(max_length=256)),
                ('country', models.CharField(max_length=256)),
                ('addressLine1', models.CharField(max_length=256, null=True)),
                ('addressLine2', models.CharField(max_length=256, null=True)),
                ('placeName', models.CharField(max_length=256, null=True)),
                ('isMobilePoint', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='UserModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=64, unique=True, verbose_name='email address')),
                ('salt', models.CharField(default='', max_length=64)),
                ('password', models.CharField(default='', max_length=128)),
                ('date_joined', models.DateTimeField(default=datetime.datetime.now)),
                ('is_superuser', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('donatedBlood', models.FloatField(default=0.0)),
                ('donatedPlasma', models.FloatField(default=0.0)),
                ('donatedPlatelets', models.FloatField(default=0.0)),
                ('lastDonationTime', models.DateTimeField(null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='DonationModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('donationType', models.CharField(choices=[('Blood', 'Bld'), ('Plasma', 'Plm'), ('Platelets', 'Plt')], default='Blood', max_length=50)),
                ('amount', models.FloatField()),
                ('time', models.DateTimeField(null=True)),
                ('donor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('place', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Main.localizationmodel')),
            ],
        ),
    ]
