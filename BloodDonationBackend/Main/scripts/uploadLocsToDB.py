from Main.models import *


def run():
    with open(r'collectionPoints.csv', 'r') as src:
        for line in src:
            city, name, address, isMobile, lat, long = line.strip().split(';')
            LocalizationModel(city=city, placeName=name, address=address, isMobilePoint=int(isMobile), latitude=lat, longitude=long).save()
