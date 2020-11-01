from Main.models import BloodReservesModel
import requests
from bs4 import BeautifulSoup
import re


def run():
    webscrapKrakow()


def webscrapKrakow():
    try:
        webpage = requests.get("https://rckik.krakow.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    anchors = soup.findAll('img', {
        'src': lambda x: x and re.match('https://rckik.krakow.pl/wp-content/uploads/2016/11/\d{1,3}.png', x)})
    for anchor in anchors:
        link = anchor['src']
        volume = int(link[link.rfind(r'/') + 1:][:-4])
        group = anchor.parent.next_sibling.find('strong').text.replace(u'\xa0', ' ')
        group = group.split(' ')[0].replace('0','O') + '_' + ('P' if '+' in group else 'N')
        try:
            br = BloodReservesModel.objects.get(region='Krakow', group=group)
        except BloodReservesModel.DoesNotExist:
            BloodReservesModel(region="Krakow", volume=volume // 25, group=group).save()
        else:
            br.volume = volume//25
            br.save()
