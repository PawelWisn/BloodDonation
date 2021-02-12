from Main.models import BloodReservesModel
import requests
from bs4 import BeautifulSoup
import re
import time
from selenium.webdriver.chrome.options import Options
from selenium import webdriver


def run():
    webScrapKrakow()
    webScrapBialystok()
    webScrapBydgoszcz()
    webScrapGdansk()
    webScrapKatowice()
    webScrapKalisz()
    webScrapKielce()
    webScrapLodz()
    webScrapLublin()
    webScrapOlsztyn()
    webScrapOpole()
    webScrapPoznan()
    webScrapRaciborz()
    webScrapRadom()
    webScrapRzeszow()
    webScrapSlupsk()
    webScrapSzczecin()
    webScrapWalbrzych()
    webScrapWarszawa()
    webScrapWroclaw()
    webScrapZielonaGora()


def handleWebScrapFailure(func):
    def out():
        try:
            time.sleep(0.05)
            func()
        except Exception as e:
            with open('error_log.txt', 'a+') as error_log:
                print(time.time(), func.__name__, 'raised', e, file=error_log)

    return out


def saveToDB(region, volume, group):
    try:
        br = BloodReservesModel.objects.get(region=region, group=group)
    except BloodReservesModel.DoesNotExist:
        BloodReservesModel(region=region, volume=volume, group=group).save()
    else:
        br.volume = volume
        br.save()


@handleWebScrapFailure
def webScrapKrakow():
    try:
        webpage = requests.get(r"https://rckik.krakow.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('img', {
        'src': lambda x: x and re.match('https://rckik.krakow.pl/wp-content/uploads/20\d\d/\d{1,2}/\d{1,3}.png', x)})
    if len(all)!=8:
        raise ValueError("Wrong amount of webscrapped data")
    for x in all:
        volume = x['src']
        volume = int(volume[volume.rfind(r'/') + 1:volume.rfind(r'.')])
        group = x.parent.next_sibling.find('strong').text.strip().replace(u'\xa0', ' ')
        group = group.split(' ')[0].replace('0', 'Z') + '_' + ('P' if '+' in group else 'N')
        saveToDB('Krakow', volume // 25, group)


@handleWebScrapFailure
def webScrapBialystok():
    try:
        webpage = requests.get(r"https://www.rckik.bialystok.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('div', {'class': lambda x: x and re.match('m(in|ax|id)Blood', x)})
    if len(all)!=8:
        raise ValueError("Wrong amount of webscrapped data")
    for x in all:
        volume = x['class'][0][:3]
        if volume == 'min':
            volume = 0
        elif volume == 'mid':
            volume = 2
        elif volume == 'max':
            volume = 4
        group = x.text.strip().replace(u'\xa0', ' ')
        group = group.split(' ')[0].replace('0', 'Z') + '_' + ('P' if '+' in group else 'N')
        saveToDB('Bialystok', volume, group)


@handleWebScrapFailure
def webScrapBydgoszcz():
    try:
        webpage = requests.get(r"http://www.rckik-bydgoszcz.com.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('li', {'style': lambda x: x and x.startswith('background:url(theme/default/img')})
    for x in all:
        group = x['style'][x['style'].rfind('/') + 1:][:-6].replace('minus', ';').replace('plus', ';')
        group = group.strip().upper().replace('0', 'Z').split(';')
        volume = 5 - int(group[1])
        group = group[0] + '_' + ('P' if "plus" in x['style'] else 'N')
        if volume == 1:
            volume = 0
        saveToDB('Bydgoszcz', volume, group)


@handleWebScrapFailure
def webScrapGdansk():
    try:
        webpage = requests.get(r"http://krew.gda.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('img', {'src': lambda x: x and re.match('images/blood_\d.png', x)})
    for x in all:
        volume = 5 - int(x['src'][x['src'].rfind('.') - 1])
        group = x.parent.next_sibling.text.strip().replace(u'\xa0', ' ')
        group = group.split(' ')[0].replace('0', 'Z') + '_' + ('P' if '+' in group else 'N')
        saveToDB('Gdansk', volume, group)


@handleWebScrapFailure
def webScrapKatowice():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_prefs = {}
    chrome_options.experimental_options["prefs"] = chrome_prefs
    chrome_prefs["profile.default_content_settings"] = {"images": 2}
    driver = webdriver.Chrome(options=chrome_options)
    driver.get(r'https://rckik-katowice.pl')
    time.sleep(5)
    data = driver.find_element_by_class_name('drops').text.replace(u'\xa0', ' ').replace('stan ', '')
    data = data.replace('średni', '2').replace('niski', '1').replace('optymalny', '3')
    data = data.replace('wysoki', '4').replace('krytyczny', '0').split('\n')
    for i in range(0, len(data), 2):
        group = data[i].strip().split(' ')[0].replace('0', 'Z') + '_' + ('P' if '+' in data[i] else 'N')
        saveToDB('Katowice', data[i + 1], group)
    driver.close()


@handleWebScrapFailure
def webScrapKalisz():
    try:
        webpage = requests.get(r"http://krwiodawstwo.kalisz.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('img', {'src': lambda x: x and re.search(r'/widgets/BloodSupply/assets/blood-\d_\d.png', x)})
    for x in all:
        group = x['alt'].replace('0', 'Z').split(' ')[0] + '_' + ('P' if '+' in x['alt'] else 'N')
        volume = x['src']
        volume = volume[volume.rfind('-') + 1:volume.rfind('.')]
        if volume == '3_4':
            volume = 3
        elif volume == '1_4':
            volume = 2
        else:
            volume = 1
        saveToDB('Kalisz', volume, group)


@handleWebScrapFailure
def webScrapKielce():
    try:
        webpage = requests.get(r"https://www.rckik-kielce.com.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = set(soup.findAll('img', {'src': lambda x: x and re.match('/images/krople/\d{1,3}', x),
                                   'title': lambda x: x and re.match('[0AB]{1,2} Rh[-+]{1}', x)}))
    for x in all:
        volume = int(x['src'][x['src'].rfind('/') + 1:][:2])
        if volume == 10: volume = 100
        group = x.get('title').strip()
        group = group.replace(u'\xa0', ' ').split(' ')[0].replace('0', 'Z') + '_' + ('P' if '+' in group else 'N')
        saveToDB('Kielce', volume // 25, group)


@handleWebScrapFailure
def webScrapLublin():
    def getRh(x):
        return ('P' if '+' in x.parent.parent.parent.parent.parent.find('h2').text else 'N')

    try:
        webpage = requests.get(r"http://www.rckik.lublin.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('img', {'src': lambda x: x and re.match('/img/krew-(niski|sredni|wysoki).png', x),
                               'title': lambda x: x and re.match('site\.(niski|sredni|wysoki)', x)})
    for x in all:
        volume = x['title'][5:]
        if volume == 'wysoki':
            volume = 4
        elif volume == 'sredni':
            volume = 2
        else:
            volume = 0
        group = x.parent.text.strip().replace('0', 'Z') + '_' + getRh(x)
        saveToDB('Lublin', volume, group)


@handleWebScrapFailure
def webScrapOlsztyn():
    try:
        webpage = requests.get(r"http://rckikol.pl/potrzeba-krwi/")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('strong')
    all = list(filter(lambda x: re.search(r'^(0|A|B|AB)Rh\+?$', str(x.text)), all))[:8]
    for x in all:
        group = x.text.strip().replace('0', 'Z').split('Rh')[0] + '_' + ('P' if '+' in x.text else 'N')
        parent = x.parent.parent
        volume = parent.find('div', {'data-fill-amount': lambda y: y and re.match(r'^\d{1,3}$', y)})['data-fill-amount']
        volume = int(volume)
        if volume >= 90:
            volume = 4
        elif volume >= 40:
            volume = 2
        elif volume >= 10:
            volume = 1
        else:
            volume = 0
        saveToDB('Olsztyn', volume, group)


@handleWebScrapFailure
def webScrapOpole():
    try:
        webpage = requests.get(r"https://www.rckik-opole.com.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('img', {'alt': lambda x: x and re.match(r'^(A|0|B|AB) RhD.*?stan$', x)})
    for x in all:
        group = x['alt'].replace('0', 'Z').split(' ')[0] + '_' + ('P' if 'plus' in x['alt'] else 'N')
        volume = 5 - int(x['src'][x['src'].rfind(r'.') - 1])
        saveToDB('Opole', volume, group)


@handleWebScrapFailure
def webScrapPoznan():
    try:
        webpage = requests.get(r"https://www.rckik.poznan.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('li', string=re.compile(r'^(A|0|B|AB) Rh [-+]$'))
    for x in all:
        group = x.text.replace('0', 'Z').split(' ')[0] + '_' + ('P' if '+' in x.text else 'N')
        volume = x['class'][0][1:]
        if volume == 'F':
            volume = 4
        elif volume == 'M':
            volume = 2
        elif volume == 'L':
            volume = 1
        else:
            volume = 0
        saveToDB('Poznan', volume, group)


@handleWebScrapFailure
def webScrapRaciborz():
    try:
        webpage = requests.get(r"https://rckik.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('img', {'src': lambda x: x and re.match(r'/assets/img/krew.*?.png', x),
                               'title': lambda x: x and re.match(r'site\.(niski|sredni|wysoki|bardzoniski)', x)})
    for x in all:
        group = x.parent.text.strip().replace(u'\xa0', '').split('Rh')[0]
        group = group.replace('0', 'Z').split(' ')[0] + '_' + ('P' if '+' in x.parent.text else 'N')
        volume = x['title'][5:]
        if volume == 'wysoki':
            volume = 4
        elif volume == 'sredni':
            volume = 2
        elif volume == 'niski':
            volume = 1
        else:
            volume = 0
        saveToDB('Raciborz', volume, group)


@handleWebScrapFailure
def webScrapRadom():
    try:
        webpage = requests.get(r"http://www.rckik.radom.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('p')
    all = list(filter(lambda x: re.search(r'^(0|A|B|AB) RH [-+].*$', str(x.text)), all))
    for x in all:
        group = x.text.strip().replace('0', 'Z').split('RH')[0].strip() + '_' + ('P' if '+' in x.text else 'N')
        volume = x.parent.find('img')['src']
        volume = volume[volume.rfind(r'/') + 1:volume.rfind(r'.')]
        if volume == 'bniski':
            volume = 0
        elif volume == 'niski':
            volume = 1
        elif volume == 'sredni':
            volume = 2
        else:
            volume = 4
        saveToDB('Radom', volume, group)


@handleWebScrapFailure
def webScrapRzeszow():
    try:
        webpage = requests.get(r"https://www.rckk.rzeszow.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('div', {'class': lambda x: x and re.match(r'iconBlood_\d', x)})
    for x in all:
        volume = x.parent['style'].split(' ')[-1][:-3]
        group = x.text.strip().replace('0', 'Z').split(' ')[0] + '_' + ('P' if '+' in x.text else 'N')
        if volume == '22':
            volume = 3
        elif volume == '35':
            volume = 1
        elif volume == '43':
            volume = 0
        else:
            volume = 4
        saveToDB('Rzeszow', volume, group)


@handleWebScrapFailure
def webScrapSlupsk():
    try:
        webpage = requests.get(r"http://www.krwiodawstwo.slupsk.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    divs = soup.findAll('div',{'class': lambda x: x and re.match(r'item .{1,4}rh(minus|plus)', x),
                              })

    for div in divs:
        group = div.find('div',{'class': lambda x:x and x=='group'}).text.strip()
        group = group.replace('0', 'Z').split('RH')[0].strip() + '_' + ('P' if '+' in group else 'N')
        volume = div.find('img',{'src': lambda x:x and re.match(r"http://krwiodawstwo\.slupsk\.pl/wp-content/uploads/202\d/\d\d/.*?\.png", x)})['src']
        volume = volume[volume.rfind(r'/')+1:-4]
        if volume == 'glowna_04':
            volume = 4
        elif volume == 'glowna_041':
            volume = 2
        else:
            volume = 0
        saveToDB('Slupsk', volume, group)


@handleWebScrapFailure
def webScrapSzczecin():
    try:
        webpage = requests.get(r"http://www.krwiodawstwo.szczecin.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('img', {'src': lambda x: x and re.search(r'/themes/default/assets/images/blood/\d.(gif|png)', x),
                               'alt': lambda x: not x})
    for x in all:
        volume = int(x['src'][x['src'].rfind('/') + 1:x['src'].rfind('.')])
        if volume <= 2:
            volume -= 1
        group = x.parent.find('span').text
        group = group.strip().replace('0', 'Z').split(' ')[0] + '_' + ('P' if '+' in group else 'N')
        saveToDB('Szczecin', volume, group)


@handleWebScrapFailure
def webScrapWalbrzych():
    try:
        webpage = requests.get(r"http://www.rckik.walbrzych.pl/site/")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('img', {'src': lambda x: x and re.search(r'/site/templates/as002027/images/\d.png', x),
                               'alt': lambda x: x and re.match(r'(0|A|B|AB)[-+]', x)})
    for x in all:
        volume = 5 - int(x['src'][x['src'].rfind('/') + 1:x['src'].rfind('.')])
        if volume <= 2:
            volume -= 1
        group = x['alt'].split(' ')[0]
        group = group.replace('0', 'Z')[:-1] + '_' + ('P' if '+' in group else 'N')
        saveToDB('Walbrzych', volume, group)


@handleWebScrapFailure
def webScrapWarszawa():
    try:
        webpage = requests.get(r"http://www.rckik-warszawa.com.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('img', {'src': lambda x: x and re.search(r'/img/krew-(bardzoniski|niski|sredni|wysoki).png', x),
                               'alt': lambda x: x and re.match(r'(Bardzo niski|Bardzoniski|Niski|Średni|Wysoki)', x)})
    for x in all:
        group = x.parent.text.strip().replace('0', 'Z')
        group = group.split('Rh')[0] + '_' + ('P' if '+' in group else 'N')
        volume = x['src']
        volume = volume[volume.rfind('-') + 1:volume.rfind('.')]
        if volume == 'wysoki':
            volume = 4
        elif volume == 'sredni':
            volume = 2
        elif volume == 'niski':
            volume = 1
        else:
            volume = 0
        saveToDB('Warszawa', volume, group)


@handleWebScrapFailure
def webScrapWroclaw():
    try:
        webpage = requests.get(r"https://www.rckik.wroclaw.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('img', {'src': lambda x: x and re.match(r'images/pojemnik_\d.(png|gif)', x)})
    for x in all:
        volume = x['src']
        volume = 5 - int(volume[volume.rfind('_') + 1:volume.rfind('.')])
        group = x['alt'].replace('0', 'Z').split(' ')[0] + '_' + ('P' if 'plus' in x['alt'] else 'N')
        saveToDB('Wroclaw', volume, group)


@handleWebScrapFailure
def webScrapZielonaGora():
    try:
        webpage = requests.get(r"http://www.rckik.zgora.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.find('div', {"id": lambda x: x == "bloodmeter"}).findAll('div', {
        'class': lambda x: x and re.search(r'^blood-\d{1,2}', x)})
    groups = ['Z_P', 'AB_P', 'B_P', 'A_P', 'Z_N', 'AB_N', 'B_N', 'A_N']
    for x in all:
        volume = int(float(x['class'][0][x['class'][0].find('-') + 1:]))
        if volume >= 60:
            volume = 4
        elif volume >= 30:
            volume = 2
        elif volume >= 15:
            volume = 1
        else:
            volume = 0
        saveToDB('Zielona Gora', volume, groups.pop())


@handleWebScrapFailure
def webScrapLodz():
    try:
        webpage = requests.get(r"http://www.krwiodawstwo.pl")
    except ConnectionError:
        return
    soup = BeautifulSoup(webpage.text, 'html.parser')
    all = soup.findAll('img', {
        'src': lambda x: x and (re.search(r'/images/stany_zapasow/stan_(ba|ni|sr|wy)_\d{5}.jpg', x) or re.search(
            r'/images/stany_zapasow/kropla.?_19960.png', x))})
    for x in all:
        volume = x['src']
        volume = volume[volume.rfind('/') + 1:volume.rfind('.')]
        if volume.startswith('kropla'):
            volume = 0
        elif volume == "stan_ba_41048":
            volume = 1
        elif volume == 'stan_ni_31220':
            volume = 2
        elif volume == 'stan_sr_49761':
            volume = 3
        else:
            volume = 4
        group = x.parent.find('p') or x.parent.parent.find('p')
        group = group.text
        group = group.strip().replace('0', 'Z').split(' ')[0] + '_' + ('P' if '+' in group else 'N')
        saveToDB('Lodz', volume, group)
