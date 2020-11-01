from Main.models import *


def run():
    with open(r'collectionPoints.csv', 'r') as src:
        for line in src:
            city, name, address, isMobile = line.split(';')
            LocalizationModel(city=city, placeName=name, address=address, isMobilePoint=int(isMobile)).save()
