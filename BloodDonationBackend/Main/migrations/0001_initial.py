# Generated by Django 3.1.1 on 2020-10-26 19:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='LocalizationModel',
            fields=[
                ('localization_id', models.AutoField(primary_key=True, serialize=False)),
                ('city', models.CharField(max_length=256)),
                ('address', models.CharField(default='', max_length=256, null=True)),
                ('placeName', models.CharField(default='', max_length=256)),
                ('isMobilePoint', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='UserModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=64, unique=True, verbose_name='email address')),
                ('password', models.CharField(default='', max_length=128)),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_superuser', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('donatedBlood', models.IntegerField(default=0)),
                ('donatedPlasma', models.IntegerField(default=0)),
                ('donatedPlatelets', models.IntegerField(default=0)),
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
                ('donation_id', models.AutoField(primary_key=True, serialize=False)),
                ('donationType', models.CharField(choices=[('BLD', 'Blood'), ('PLM', 'Plasma'), ('PLT', 'Platelets')], default='BLD', max_length=3)),
                ('amount', models.IntegerField()),
                ('time', models.DateTimeField(null=True)),
                ('donor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('place', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Main.localizationmodel')),
            ],
        ),
    ]
