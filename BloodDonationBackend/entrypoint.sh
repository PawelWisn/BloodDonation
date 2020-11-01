#!/bin/sh

sleep 1s
pip install graphene-django
pip install django-extensions
rm -rf Main/migrations/*
python manage.py makemigrations Main
python manage.py makemigrations
python manage.py migrate
echo "from Main.models import UserModel; UserModel.objects.create_superuser('admin@o2.pl', 'admin')" | python manage.py shell
echo "from Main.models import UserModel; UserModel.objects.create_user('kamil@gmail.com', 'kamil')" | python manage.py shell
echo "from Main.models import UserModel; UserModel.objects.create_user('jacek@o2.pl', 'jacek')" | python manage.py shell
echo "from Main.models import UserModel; UserModel.objects.create_user('witek@wp.pl', 'witek')" | python manage.py shell
echo "from Main.models import UserModel; UserModel.objects.create_user('jessica@yahoo.com', 'jessica', is_male=False)" | python manage.py shell
echo "from Main.models import UserModel; UserModel.objects.create_user('anna@wp.pl', 'anna', is_male=False)" | python manage.py shell
echo "from Main.models import UserModel; UserModel.objects.create_user('robert@yahoo.com', 'robert')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Swinoujscie',placeName='RCKiK Szczecin OT Swinoujscie', address='Mieszka 1-go 4')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Gryfice',placeName='RCKiK Szczecin OT Gryfice', address='Niechorska 27')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Kolobrzeg',placeName='RCKiK Szczecin OT Kolobrzeg', address='Lopuskiego 31')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Bialogard',placeName='RCKiK Szczecin OT Bialogard', address='Nowowiejskiego 7')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Koszalin',placeName='RCKiK Szczecin OT Koszalin', address='Chalubinskiego 7')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Lebork',placeName='RCKiK Slupsk OT Lebork', address='Wegrzynowicza 13')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Wejherowo',placeName='RCKiK Gdansk OT Wejherowo', address='Weteranow 10')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Gdynia',placeName='RCKiK Gdansk OT Gdynia', address='Powstania Styczniowego 9b')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Gdansk',placeName='RCKiK Gdansk OT Gdansk', address='Polanki 117')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Kartuzy',placeName='RCKiK Gdansk OT Kartuzy', address='Floriana Ceynowy 7')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Koscierzyna',placeName='RCKiK Gdansk OT Koscierzyna', address='Alojzego Piechowskiego 36')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Chojnice',placeName='RCKiK Slupsk OT Chojnice', address='Lesna 10')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Starogard Gdanski',placeName='RCKiK Gdansk OT Starogard Gdanski', address='dr Jozefa Balewskiego 1')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Tczew',placeName='RCKiK Gdansk OT Tczew', address='Piaskowa 3')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Malbork',placeName='RCKiK Gdansk OT Malbork', address='Kotarbinskiego 14')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Elblag',placeName='RCKiK Olsztyn OT Elblag', address='Bema 80')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Paslek',placeName='RCKiK Olsztyn OT Paslek', address='Plac Grunwaldzki 8')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Bartoszyce',placeName='RCKiK Olsztyn OT Bartoszyce', address='Wyszynskiego 11')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Gizycko',placeName='RCKiK Olsztyn OT Gizycko', address='Bohaterow Westerplatte 4')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Suwalki',placeName='RCKiK Bialystok OT Suwalki', address='Szpitalna 60')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Lomza',placeName='RCKiK Bialystok OT Lomza', address='Al. Pilsudskiego 11')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Nidzica',placeName='RCKiK Olsztyn OT Nidzica', address='Traugutta 13')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Mlawa',placeName='RCKiK Warszawa OT Mlawa', address='A. Dobrskiej 1')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Ciechanow',placeName='RCKiK Warszawa OT Ciechanow', address='Powstancow Wielkopolskich 2')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Bielsk Podlaski',placeName='RCKiK Bialystok OT Bielsk Podlaski', address='Kleszczelowska 1c')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Hajnowka',placeName='RCKiK Bialystok OT Hajnowka', address='Doc Adama Dowgirda 9')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Biala Podlaska',placeName='RCKiK Lublin OT Biala Podlaska', address='Jana III Sobieskiego 8')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Siedlce',placeName='RCKiK Warszawa OT Siedlce', address='Forminskiego 14')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Lukow',placeName='RCKiK Lublin OT Lukow', address='Andrzeja Rogalinskiego 3')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Wlodawa',placeName='RCKiK Lublin OT Wlodawa', address='Al. J. Pilsudskiego 66')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Chelm',placeName='RCKiK Lublin OT Chelm', address='Szpitalna 53')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Zamosc',placeName='RCKiK Lublin OT Zamosc', address='Al. Jana Pawla II 10')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Tomaszow Lubelski',placeName='RCKiK Lublin OT Tomaszow Lubelski', address='Lwowska 82')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Przemysl',placeName='RCKiK Rzeszow OT Przemysl', address='Monte Cassino 18')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Sanok',placeName='RCKiK Rzeszow OT Sanok', address='Konarskiego 24')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Lezajsk',placeName='RCKiK Rzeszow OT Lezajsk', address='Lesna 22')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Stalowa Wola',placeName='RCKiK Rzeszow OT Stalowa Wola', address='Staszica 4')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Krasnik',placeName='RCKiK Lublin OT Krasnik', address='Al. Niepodleglości 25')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Krosno',placeName='RCKiK Rzeszow OT Krosno', address='Korczynska 57')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Mielec',placeName='RCKiK Rzeszow OT Mielec', address='Zeromskiego 17')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Debica',placeName='RCKiK Rzeszow OT Debica', address='Krakowska 91')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Jaslo',placeName='RCKiK Rzeszow OT Jaslo', address='Lwowska 22')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Gorlice',placeName='RCKiK Krakow OT Gorlice', address='Wegierska 21')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Nowy Sacz',placeName='RCKiK Krakow OT Nowy Sacz', address='Kazimierza Wielkiego 9a')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Limanowa',placeName='RCKiK Krakow OT Limanowa', address='Pilsudskiego 61')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Bochnia',placeName='RCKiK Krakow OT Bochnia', address='Krakowska 31')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Nowy Targ',placeName='RCKiK Krakow OT Nowy Targ', address='Szpitalna 12')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Zakopane',placeName='RCKiK Krakow OT Zakopane', address='Szymony 14')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Sucha Beskidzka',placeName='RCKiK Krakow OT Sucha Beskidzka', address='Szpitalna 22')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Wadowice',placeName='RCKiK Krakow OT Wadowice', address='Karmelicka 5')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Myslenice',placeName='RCKiK Krakow OT Myslenice', address='Szpitalna 2')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Cieszyn',placeName='RCKiK Katowice OT Cieszyn', address='Bielska 4')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Bielsko-Biala',placeName='RCKiK Katowice OT Bielsko-Biala', address='Wyspianskiego 21')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Oswiecim',placeName='RCKiK Krakow OT Oswiecim', address='Wysokie Brzegi 4')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Pszczyna',placeName='RCKiK Katowice OT Pszczyna', address='Biskupa Bednorza 10')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Jastrzebie-Zdroj',placeName='RCKiK Raciborz OT Jastrzebie-Zdroj', address='Jana Pawla II 7')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Wodzislaw Slaski',placeName='RCKiK Raciborz OT Wodzislaw Slaski', address='Radlinska 68')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Rybnik',placeName='RCKiK Raciborz OT Rybnik', address='Rudzka 15')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Kedzierzyn-Kozle',placeName='RCKiK Opole OT Kedzierzyn-Kozle', address='Koszykowa 5B')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Czestochowa',placeName='RCKiK Katowice OT Czestochowa', address='Kopernika 38')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Kluczbork',placeName='RCKiK Opole OT Kluczbork', address='Katowicka 26')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Brzeg',placeName='RCKiK Opole OT Brzeg', address='Mossora 1')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Nysa',placeName='RCKiK Opole OT Nysa', address='Pilsudskiego 47')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Ostrzeszow',placeName='RCKiK Kalisz OT Ostrzeszow', address='Zamkowa 17')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Ostrow Wielkopolski',placeName='RCKiK Kalisz OT Ostrow Wielkopolski', address='Limanowskiego 20-22')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Krotoszyn',placeName='RCKiK Kalisz OT Krotoszyn', address='Bolewskiego 8')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Legnica',placeName='RCKiK Wroclaw OT Legnica', address='Iwaszkiewicza 5')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Lubin',placeName='RCKiK Wroclaw OT Lubin', address='Bema 5')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Glogow',placeName='RCKiK Wroclaw OT Glogow', address='Kosciuszki 15')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Zagan',placeName='RCKiK Zielona Gora OT Zagan', address='Szprotawska 45a')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Zary',placeName='RCKiK Zielona Gora OT Zary', address='Skarbowa 2')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Leszno',placeName='RCKiK Poznan OT Leszno', address='Kiepury 45')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Srem',placeName='RCKiK Poznan OT Srem', address='Chelmonskiego 1')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Koscian',placeName='RCKiK Poznan OT Koscian', address='Szpitalna 7')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Wolsztyn',placeName='RCKiK Poznan OT Wolsztyn', address='Wschowska 3')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Nowy Tomysl',placeName='RCKiK Poznan OT Nowy Tomysl', address='Sienkiewicza 7')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Miedzyrzecz',placeName='RCKiK Zielona Gora OT Miedzyrzecz', address='Konstytucji 3 Maja 24')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Sulecin',placeName='RCKiK Zielona Gora OT Sulecin', address='Dudka 15')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Gorzow Wielkopolski',placeName='RCKiK Zielona Gora OT Gorzow Wielkopolski', address='Dekerta 1')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Szamotuly',placeName='RCKiK Poznan OT Szamotuly', address='Sukiennicza 13')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Czarnkow',placeName='RCKiK Poznan OT Czarnkow', address='Kosciuszki 91')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Pila',placeName='RCKiK Poznan OT Pila', address='Rydygiera 1')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Chodziez',placeName='RCKiK Poznan OT Chodziez', address='Zeromskiego 29')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Wagrowiec',placeName='RCKiK Poznan OT Wagrowiec', address='Kosciuszki 74')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Gniezno',placeName='RCKiK Poznan OT Gniezno', address='Sw. Jana 9')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Wrzesnia',placeName='RCKiK Poznan OT Wrzesnia', address='Slowackiego 2')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Konin',placeName='RCKiK Kalisz OT Konin', address='Wyszynskiego 1')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Drawsko Pomorskie',placeName='RCKiK Szczecin OT Drawsko Pomorskie', address='Boleslawa Chrobrego 4')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Grudziadz',placeName='RCKiK Bydgoszcz OT Grudziadz', address='Wlodka 16-18')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Ilawa',placeName='RCKiK Olsztyn OT Ilawa', address='Wladysława Andersa 3')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Brodnica',placeName='RCKiK Bydgoszcz OT Brodnica', address='18 Stycznia 36a')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Torun',placeName='RCKiK Bydgoszcz OT Torun', address='Gagarina 212-226')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Inowrocław',placeName='RCKiK Bydgoszcz OT Inowrocław', address='Poznanska 97')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Wloclawek',placeName='RCKiK Bydgoszcz OT Wloclawek', address='Lunewil 15')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Plock',placeName='RCKiK Warszawa OT Plock', address='Medyczna 19')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Nowy Dwor Paderewskiego',placeName='RCKiK Warszawa OT Nowy Dwor Paderewskiego', address='Paderewskiego 7')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Garwolin',placeName='RCKiK Warszawa OT Garwolin', address='Lubelska 50')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Grojec',placeName='RCKiK Radom OT Grojec', address='Piotra Skargi 10')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Kozienice',placeName='RCKiK Radom OT Kozienice', address='gen. Wladysława Sikorskiego 10')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Pulawy',placeName='RCKiK Lublin OT Pulawy', address='Bema 1')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Lubartow',placeName='RCKiK Lublin OT Lubartow', address='Cicha 14')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Sandomierz',placeName='RCKiK Kielce OT Sandomierz', address='Schinzla 13')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Ostrowiec Swietokrzyski',placeName='RCKiK Kielce OT Ostrowiec Swietokrzyski', address='Szymanowskiego 11')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Skarzysko-Kamienna',placeName='RCKiK Kielce OT Skarzysko-Kamienna', address='Szpitalna 1')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Konskie',placeName='RCKiK Kielce OT Konskie', address='Gimnazjalna 41b')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Konskie',placeName='RCKiK Kielce OT Konskie', address='Gimnazjalna 41b')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Tarnow',placeName='RCKiK Krakow OT Tarnow 2', address='Lwowska 178a')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Tarnow',placeName='RCKiK Krakow OT Tarnow 1', address='Szpitalna 13')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Poznan',placeName='RCKiK Poznan OT Poznan', address='Juraszów 7')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Gdansk',placeName='WCKiK MON Terenowa Stacja Gdańsk', address='Polanki 117')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Gliwice',placeName='RCKiK Katowice OT Gliwice', address='Wybrzeze Armii Krajowej 15')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Zabrze',placeName='RCKiK Katowice OT Zabrze', address='Wolnosci 265-267')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Bytom',placeName='RCKiK Katowice OT Bytom', address='Zeromskiego 7')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Tarnowskie Gory',placeName='RCKiK Katowice OT Tarnowskie Gory', address='Pyskowicka 47')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Dabrowa Gornicza',placeName='RCKiK Katowice OT Dabrowa Gornicza', address='Szpitalna 13')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Sosnowiec',placeName='RCKiK Katowice OT Sosnowiec', address='Zegadlowicza 3')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Lublin',placeName='RCKiK Lublin OT Lublin', address='Al. Krasnicka 100')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Warszawa',placeName='RCKiK Warszawa OT Warszawa 1', address='Ceglowska 80')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Warszawa',placeName='RCKiK Warszawa OT Warszawa 2', address='Nowogrodzka 59')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Krakow',placeName='RCKiK Krakow OT Krakow', address='Wielicka 265')" | python manage.py shell
#####
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Warszawa',placeName='WCKiK MSW Warsaw', address='Woloska 137')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Warszawa',placeName='WCKiK MON Warsaw', address='Szaserów 128')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Lublin',placeName='WCKiK MON Lublin', address='Al. Raclawickie 23')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Elk',placeName='WCKiK MON Elk', address='Kosciuszki 30')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Bydgoszcz',placeName='WCKiK MON Bydgoszcz', address='Powstancow Warszawy 5')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Szczecin',placeName='WCKiK MON Szczecin', address='Piotra Skargi 9-11')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Wroclaw',placeName='WCKiK MON Wroclaw', address='Rudolfa Weigla 5')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Krakow',placeName='WCKiK MON Krakow', address='Wroclawska 1-3')" | python manage.py shell
#
#####
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Bialystok',placeName='RCKiK Bialystok', address='Marii Sklodowskiej-Curie 23')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Bydgoszcz',placeName='RCKiK Bydgoszcz', address='Ks. Markwarta 8')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Gdansk',placeName='RCKiK Gdansk', address='J. Hoene-Wronskiego 4')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Kalisz',placeName='RCKiK Kalisz', address='Kaszubska 9')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Katowice',placeName='RCKiK Katowice', address='Raciborska 15')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Kielce',placeName='RCKiK Kielce', address='Jagiellonska 66')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Krakow',placeName='RCKiK Krakow', address='Rzeznicza 11')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Lublin',placeName='RCKiK Lublin', address='Zolnierzy Niepodleglej 8')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Lodz',placeName='RCKiK Lodz', address='Franciszkanska 17/25')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Olsztyn',placeName='RCKiK Olsztyn', address='Malborska 2')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Opole',placeName='RCKiK Opole', address='Kosnego 55')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Poznan',placeName='RCKiK Poznan', address='Marcelinska 44')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Raciborz',placeName='RCKiK Raciborz', address='Sienkiewicza 3 A')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Radom',placeName='RCKiK Radom', address='Limanowskiego 42')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Rzeszow',placeName='RCKiK Rzeszow', address='Wierzbowa 14')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Slupsk',placeName='RCKiK Slupsk', address='Szarych Szeregow 21')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Szczecin',placeName='RCKiK Szczecin', address='al. Wojska Polskiego 80/82')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Walbrzych',placeName='RCKiK Walbrzych', address='Chrobrego 31')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Warszawa',placeName='RCKiK Warszawa', address='Saska 63')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Wroclaw',placeName='RCKiK Wroclaw', address='Czerwonego Krzyza 5')" | python manage.py shell
#echo "from Main.models import LocalizationModel; LocalizationModel.objects.create(city='Zielona Gora',placeName='RCKiK Zielona Gora', address='Zyty 21')" | python manage.py shell
#echo "from Main.models import *;from django.utils import timezone;users = UserModel.objects.all();locs = LocalizationModel.objects.all();DonationModel(donor=users[1],place=locs[0],donationType='BLD', amount=450,time=timezone.now()).save();
#DonationModel(donor=users[2],place=locs[2],donationType='PLM', amount=450,time=timezone.now()).save();
#DonationModel(donor=users[3],place=locs[3],donationType='PLT', amount=450,time=timezone.now()).save();" | python manage.py shell
python manage.py runscript uploadLocsToDB
sleep 2s
python manage.py runscript sendEmailRemainders
exec "$@"
