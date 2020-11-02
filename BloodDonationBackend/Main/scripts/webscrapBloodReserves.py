from Main.models import BloodReservesModel
import requests
from bs4 import BeautifulSoup
import re
import time
from selenium.webdriver.chrome.options import Options
from selenium import webdriver


def run():
    # webscrapKrakow()
    # webscrapBialystok()
    # webscrapBydgoszcz()
    # webscrapGdansk()
    # webscrapKatowice()
    # webscrapKielce()
    webscrapLublin()


def webscrapKrakow():
    try:
        webpage = requests.get(r"https://rckik.krakow.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    anchors = soup.findAll('img', {
        'src': lambda x: x and re.match('https://rckik.krakow.pl/wp-content/uploads/20\d\d/\d{1,2}/\d{1,3}.png', x)})
    for anchor in anchors:
        link = anchor['src']
        volume = int(link[link.rfind(r'/') + 1:link.rfind(r'.')])
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
        try:
            br = BloodReservesModel.objects.get(region='Bialystok', group=group)
        except BloodReservesModel.DoesNotExist:
            BloodReservesModel(region="Bialystok", volume=volume, group=group).save()
        else:
            br.volume = volume
            br.save()


def webscrapBydgoszcz():
    try:
        webpage = requests.get(r"http://www.rckik-bydgoszcz.com.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    a = soup.findAll('li', {'style': lambda x: x and x.startswith('background:url(theme/default/img')})
    for x in a:
        group = x['style'][x['style'].rfind('/') + 1:][:-6].replace('minus', ';').replace('plus', ';')
        group = group.upper().replace('0', 'Z').split(';')
        group, volume = group[0], 5 - int(group[1])
        if volume == 1: volume = 0
        rh = 'P' if "plus" in x['style'] else 'N'
        group += f'_{rh}'
        try:
            br = BloodReservesModel.objects.get(region='Bydgoszcz', group=group)
        except BloodReservesModel.DoesNotExist:
            BloodReservesModel(region="Bydgoszcz", volume=volume, group=group).save()
        else:
            br.volume = volume
            br.save()


def webscrapGdansk():
    try:
        webpage = requests.get(r"http://krew.gda.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    a = soup.findAll('img', {'src': lambda x: x and re.match('images/blood_\d.png', x)})
    for x in a:
        volume = 5 - int(x['src'][x['src'].rfind('.') - 1])
        group = x.parent.next_sibling.text.replace(u'\xa0', ' ')
        group = group.split(' ')[0].replace('0', 'Z') + '_' + ('P' if '+' in group else 'N')
        try:
            br = BloodReservesModel.objects.get(region='Gdansk', group=group)
        except BloodReservesModel.DoesNotExist:
            BloodReservesModel(region="Gdansk", volume=volume, group=group).save()
        else:
            br.volume = volume
            br.save()


def webscrapKatowice():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_prefs = {}
    chrome_options.experimental_options["prefs"] = chrome_prefs
    chrome_prefs["profile.default_content_settings"] = {"images": 2}
    driver = webdriver.Chrome(options=chrome_options)
    driver.get('https://rckik-katowice.pl')
    time.sleep(5)
    data = driver.find_element_by_class_name('drops').text.replace(u'\xa0', ' ').replace('stan ', '')
    data = data.replace('średni', '2').replace('niski', '1').replace('optymalny', '3')
    data = data.replace('maksymalny', '4').replace('krytyczny', '0').split('\n')
    for i in range(0, len(data), 2):
        group = data[i].split(' ')[0].replace('0', 'Z') + '_' + ('P' if '+' in data[i] else 'N')
        try:
            br = BloodReservesModel.objects.get(region='Katowice', group=group)
        except BloodReservesModel.DoesNotExist:
            BloodReservesModel(region="Katowice", volume=data[i + 1], group=group).save()
        else:
            br.volume = data[i + 1]
            br.save()
    driver.close()


def webscrapKielce():
    try:
        webpage = requests.get(r"https://www.rckik-kielce.com.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    a = set(soup.findAll('img', {'src': lambda x: x and re.match('/images/krople/\d{1,3}', x),
                                 'title': lambda x: x and re.match('[0AB]{1,2} Rh[-+]{1}', x)}))
    for x in a:
        volume = int(x['src'][x['src'].rfind('/') + 1:][:2])
        if volume == 10: volume = 100
        group = x.get('title')
        group = group.replace(u'\xa0', ' ').split(' ')[0].replace('0', 'Z') + '_' + ('P' if '+' in group else 'N')
        try:
            br = BloodReservesModel.objects.get(region='Kielce', group=group)
        except BloodReservesModel.DoesNotExist:
            BloodReservesModel(region="Kielce", volume=volume // 25, group=group).save()
        else:
            br.volume = volume // 25
            br.save()


def webscrapLublin():
    def getRh(x):
        return 'P' if '+' in x.parent.parent.parent.parent.parent.find('h2').text else 'N'

    try:
        webpage = requests.get(r"http://www.rckik.lublin.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    a = soup.findAll('img', {'src': lambda x: x and re.match('/img/krew-(niski|sredni|wysoki).png', x),
                             'title': lambda x: x and re.match('site\.(niski|sredni|wysoki)', x)})
    for x in a:
        volume = x['title'][5:]
        if volume == 'wysoki':
            volume = 4
        elif volume == 'sredni':
            volume = 2
        else:
            volume = 0
        group = x.parent.text.strip().replace('0', 'Z') + '_' + getRh(x)
        try:
            br = BloodReservesModel.objects.get(region='Lublin', group=group)
        except BloodReservesModel.DoesNotExist:
            BloodReservesModel(region="Lublin", volume=volume, group=group).save()
        else:
            br.volume = volume
            br.save()
