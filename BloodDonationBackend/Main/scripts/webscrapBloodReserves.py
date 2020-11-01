from Main.models import BloodReservesModel
import requests
from bs4 import BeautifulSoup
import re


def run():
    webscrapKrakow()
    webscrapBialystok()


def webscrapKrakow():
    try:
        webpage = requests.get(r"https://rckik.krakow.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    anchors = soup.findAll('img', {
        'src': lambda x: x and re.match('https://rckik.krakow.pl/wp-content/uploads/2016/11/\d{1,3}.png', x)})
    for anchor in anchors:
        link = anchor['src']
        volume = int(link[link.rfind(r'/') + 1:][:-4])
        group = anchor.parent.next_sibling.find('strong').text.replace(u'\xa0', ' ')
        group = group.split(' ')[0].replace('0', 'Z') + '_' + ('P' if '+' in group else 'N')
        try:
            br = BloodReservesModel.objects.get(region='Krakow', group=group)
        except BloodReservesModel.DoesNotExist:
            BloodReservesModel(region="Krakow", volume=volume // 25, group=group).save()
        else:
            br.volume = volume // 25
            br.save()


def webscrapBialystok():
    try:
        webpage = requests.get(r"https://www.rckik.bialystok.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    a = soup.findAll('div', {'class': lambda x: x and re.match('m(in|ax|id)Blood', x)})
    for x in a:
        volume = x['class'][0][:3]
        if volume == 'min':
            volume = 0
        elif volume == 'mid':
            volume = 2
        elif volume == 'max':
            volume = 4
        group = x.text.replace(u'\xa0', ' ')
        group = group.split(' ')[0].replace('0', 'Z') + '_' + ('P' if '+' in group else 'N')
        print(group, BloodReservesModel.objects.all())
        try:
            br = BloodReservesModel.objects.get(region='Bialystok', group=group)
        except BloodReservesModel.DoesNotExist:
            BloodReservesModel(region="Bialystok", volume=volume, group=group).save()
        else:
            br.volume = volume
            br.save()
