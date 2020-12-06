from Main.models import *


def run():
    with open(r'collectionPoints.csv', 'r') as src:
        for line in src:
            city, name, address, isMobile, lat, long = line.strip().split(';')
            LocalizationModel(city=city, place_name=name, address=address, is_mobile_point=int(isMobile), latitude=lat, longitude=long).save()
