import React, {useState} from "react";
import './CollectionPoints.scss';
import UpperBar from "./UpperBar";
import ManyRadiobuttonsNoDefault from "./ManyRadiobuttonsNoDefault";
import BottomBar from "./BottomBar";
import CollectionPointTile from "./CollectionPointTile";
import MyMap from "./Map";
import "leaflet/dist/leaflet.css";

function CollectionPoints() {
    const [displayMobileOnly, setDisplayMobileOnly] = useState(false);

    let data = [
        {
            "city": "Barlinek",
            "placeName": "RCKiK Szczecin Mobile Barlinek",
            "address": "Szpitalna 8",
            "isMobilePoint": true,
            "latitude": "52.9967477",
            "longitude": "15.2212969"
        },
        {
            "city": "Bartoszyce",
            "placeName": "RCKiK Olsztyn OT Bartoszyce",
            "address": "Wyszynskiego 11",
            "isMobilePoint": false,
            "latitude": "54.2586528",
            "longitude": "20.7964833"
        },
        {
            "city": "Belchatow",
            "placeName": "RCKiK Lodz Mobile Belchatow",
            "address": "Edwardow 3A",
            "isMobilePoint": true,
            "latitude": "51.3571705",
            "longitude": "19.364955"
        },
        {
            "city": "Biala Podlaska",
            "placeName": "RCKiK Lublin OT Biala Podlaska",
            "address": "Jana III Sobieskiego 8",
            "isMobilePoint": false,
            "latitude": "52.047289",
            "longitude": "23.1095191"
        },
        {
            "city": "Bialogard",
            "placeName": "RCKiK Szczecin OT Bialogard",
            "address": "Nowowiejskiego 7",
            "isMobilePoint": false,
            "latitude": "54.0061506",
            "longitude": "16.0040568"
        },
        {
            "city": "Bialystok",
            "placeName": "RCKiK Bialystok",
            "address": "Marii Sklodowskiej-Curie 23",
            "isMobilePoint": false,
            "latitude": "53.1256921",
            "longitude": "23.1604182"
        },
        {
            "city": "Bielsk Podlaski",
            "placeName": "RCKiK Bialystok OT Bielsk Podlaski",
            "address": "Kleszczelowska 1c",
            "isMobilePoint": false,
            "latitude": "52.7597153",
            "longitude": "23.2019586"
        },
        {
            "city": "Bielsko-Biala",
            "placeName": "RCKiK Katowice OT Bielsko-Biala",
            "address": "Wyspianskiego 21",
            "isMobilePoint": false,
            "latitude": "49.8232317",
            "longitude": "19.0356352"
        },
        {
            "city": "Bochnia",
            "placeName": "RCKiK Krakow OT Bochnia",
            "address": "Krakowska 31",
            "isMobilePoint": false,
            "latitude": "49.9664099",
            "longitude": "20.4210931"
        },
        {
            "city": "Bogatynia",
            "placeName": "RCKiK Walbrzych Mobile Bogatynia",
            "address": "Szpitalna 16",
            "isMobilePoint": true,
            "latitude": "50.9071062",
            "longitude": "14.9683775"
        },
        {
            "city": "Boleslawiec",
            "placeName": "RCKiK Walbrzych Mobile Boleslawiec",
            "address": "Plac Marszalka Jozefa Pilsudskiego 1",
            "isMobilePoint": true,
            "latitude": "51.2620809",
            "longitude": "15.5680682"
        },
        {
            "city": "Brodnica",
            "placeName": "RCKiK Bydgoszcz OT Brodnica",
            "address": "18 Stycznia 36a",
            "isMobilePoint": false,
            "latitude": "53.245657",
            "longitude": "19.4038429"
        },
        {
            "city": "Brzeg",
            "placeName": "RCKiK Opole OT Brzeg",
            "address": "Mossora 1",
            "isMobilePoint": false,
            "latitude": "50.7637125",
            "longitude": "17.5682273"
        },
        {
            "city": "Busko-Zdroj",
            "placeName": "RCKiK Kielce Mobile Busko-Zdroj",
            "address": "Bohaterow Warszawy 67",
            "isMobilePoint": true,
            "latitude": "50.46807",
            "longitude": "20.7024053"
        },
        {
            "city": "Bydgoszcz",
            "placeName": "RCKiK Bydgoszcz",
            "address": "Ks. Markwarta 8",
            "isMobilePoint": false,
            "latitude": "53.1256921",
            "longitude": "23.1604182"
        },
        {
            "city": "Bydgoszcz",
            "placeName": "WCKiK MON Bydgoszcz",
            "address": "Powstancow Warszawy 5",
            "isMobilePoint": false,
            "latitude": "53.1424876",
            "longitude": "18.0130542"
        },
        {
            "city": "Bytom",
            "placeName": "RCKiK Katowice OT Bytom",
            "address": "Zeromskiego 7",
            "isMobilePoint": false,
            "latitude": "50.3528354",
            "longitude": "18.9204372"
        },
        {
            "city": "Chelm",
            "placeName": "RCKiK Lublin OT Chelm",
            "address": "Szpitalna 53",
            "isMobilePoint": false,
            "latitude": "51.1496382",
            "longitude": "23.4512572"
        },
        {
            "city": "Chelmno",
            "placeName": "RCKiK Bydgoszcz Mobile Chelmno",
            "address": "Plac Rydygiera 1",
            "isMobilePoint": true,
            "latitude": "53.344259",
            "longitude": "18.4185793"
        },
        {
            "city": "Chodziez",
            "placeName": "RCKiK Poznan OT Chodziez",
            "address": "Stefana Zeromskiego 29",
            "isMobilePoint": false,
            "latitude": "52.988335",
            "longitude": "16.8455114"
        },
        {
            "city": "Chojnice",
            "placeName": "RCKiK Slupsk OT Chojnice",
            "address": "Lesna 10",
            "isMobilePoint": false,
            "latitude": "53.712112",
            "longitude": "17.5481381"
        },
        {
            "city": "Ciechanow",
            "placeName": "RCKiK Warszawa OT Ciechanow",
            "address": "Powstancow Wielkopolskich 2",
            "isMobilePoint": false,
            "latitude": "52.883691",
            "longitude": "20.634853"
        },
        {
            "city": "Cieszyn",
            "placeName": "RCKiK Katowice OT Cieszyn",
            "address": "Bielska 4",
            "isMobilePoint": false,
            "latitude": "49.746183",
            "longitude": "18.6387329"
        },
        {
            "city": "Czarnkow",
            "placeName": "RCKiK Poznan OT Czarnkow",
            "address": "Kosciuszki 91",
            "isMobilePoint": false,
            "latitude": "52.9429821",
            "longitude": "16.6653994"
        },
        {
            "city": "Czestochowa",
            "placeName": "RCKiK Katowice OT Czestochowa",
            "address": "Kopernika 38",
            "isMobilePoint": false,
            "latitude": "50.8085114",
            "longitude": "19.1090593"
        },
        {
            "city": "Dabrowa Gornicza",
            "placeName": "RCKiK Katowice OT Dabrowa Gornicza",
            "address": "Szpitalna 13",
            "isMobilePoint": false,
            "latitude": "50.4471778",
            "longitude": "17.9288079"
        },
        {
            "city": "Debica",
            "placeName": "RCKiK Rzeszow OT Debica",
            "address": "Krakowska 91",
            "isMobilePoint": false,
            "latitude": "50.038886",
            "longitude": "21.393327"
        },
        {
            "city": "Drawsko Pomorskie",
            "placeName": "RCKiK Szczecin OT Drawsko Pomorskie",
            "address": "Boleslawa Chrobrego 4",
            "isMobilePoint": false,
            "latitude": "53.5250149",
            "longitude": "15.8110014"
        },
        {
            "city": "Dzierzaniow",
            "placeName": "RCKiK Walbrzych Mobile Dzierzaniow",
            "address": "Poprzeczna 16",
            "isMobilePoint": true,
            "latitude": "50.728474",
            "longitude": "16.6511621"
        },
        {
            "city": "Elblag",
            "placeName": "RCKiK Olsztyn OT Elblag",
            "address": "Bema 80",
            "isMobilePoint": false,
            "latitude": "54.158151",
            "longitude": "19.432982"
        },
        {
            "city": "Elk",
            "placeName": "WCKiK MON Elk",
            "address": "Kosciuszki 30",
            "isMobilePoint": false,
            "latitude": "53.8208875",
            "longitude": "22.3620194"
        },
        {
            "city": "Garwolin",
            "placeName": "RCKiK Warszawa OT Garwolin",
            "address": "Lubelska 50",
            "isMobilePoint": false,
            "latitude": "51.870349",
            "longitude": "21.6363977"
        },
        {
            "city": "Gdansk",
            "placeName": "RCKiK Gdansk OT Gdansk",
            "address": "Polanki 117",
            "isMobilePoint": false,
            "latitude": "54.393989",
            "longitude": "18.566996"
        },
        {
            "city": "Gdansk",
            "placeName": "RCKiK Gdansk",
            "address": "J. Hoene-Wronskiego 4",
            "isMobilePoint": false,
            "latitude": "54.3657176",
            "longitude": "18.6268638"
        },
        {
            "city": "Gdansk",
            "placeName": "WCKiK MON Terenowa Stacja Gdańsk",
            "address": "Polanki 117",
            "isMobilePoint": false,
            "latitude": "54.393989",
            "longitude": "18.566996"
        },
        {
            "city": "Gdynia",
            "placeName": "RCKiK Gdansk OT Gdynia",
            "address": "Powstania Styczniowego 9b",
            "isMobilePoint": false,
            "latitude": "54.488554",
            "longitude": "18.5473332"
        },
        {
            "city": "Gizycko",
            "placeName": "RCKiK Olsztyn OT Gizycko",
            "address": "Bohaterow Westerplatte 4",
            "isMobilePoint": false,
            "latitude": "54.037377",
            "longitude": "21.768346"
        },
        {
            "city": "Gliwice",
            "placeName": "RCKiK Katowice OT Gliwice",
            "address": "Wybrzeze Armii Krajowej 15",
            "isMobilePoint": false,
            "latitude": "50.302301",
            "longitude": "18.6642829"
        },
        {
            "city": "Glogow",
            "placeName": "RCKiK Wroclaw OT Glogow",
            "address": "Kosciuszki 15",
            "isMobilePoint": false,
            "latitude": "51.4757566",
            "longitude": "16.0047207"
        },
        {
            "city": "Gniezno",
            "placeName": "RCKiK Poznan OT Gniezno",
            "address": "Sw. Jana 9",
            "isMobilePoint": false,
            "latitude": "52.5383831",
            "longitude": "17.5945071"
        },
        {
            "city": "Golub-Dobrzyn",
            "placeName": "RCKiK Bydgoszcz Mobile Golub-Dobrzyn",
            "address": "Plac Tysiaclecia 25",
            "isMobilePoint": true,
            "latitude": "53.1091434",
            "longitude": "19.0515295"
        },
        {
            "city": "Gorlice",
            "placeName": "RCKiK Krakow OT Gorlice",
            "address": "Wegierska 21",
            "isMobilePoint": false,
            "latitude": "49.6507019",
            "longitude": "21.162708"
        },
        {
            "city": "Gorzow Wielkopolski",
            "placeName": "RCKiK Zielona Gora OT Gorzow Wielkopolski",
            "address": "Dekerta 1",
            "isMobilePoint": false,
            "latitude": "52.7619617",
            "longitude": "15.2373307"
        },
        {
            "city": "Grojec",
            "placeName": "RCKiK Radom OT Grojec",
            "address": "Piotra Skargi 10",
            "isMobilePoint": false,
            "latitude": "51.867812",
            "longitude": "20.8657792"
        },
        {
            "city": "Grudziadz",
            "placeName": "RCKiK Bydgoszcz OT Grudziadz",
            "address": "Wlodka 16-18",
            "isMobilePoint": false,
            "latitude": "53.4839433",
            "longitude": "18.7499041"
        },
        {
            "city": "Gryfice",
            "placeName": "RCKiK Szczecin OT Gryfice",
            "address": "Niechorska 27",
            "isMobilePoint": false,
            "latitude": "53.924302",
            "longitude": "15.1744229"
        },
        {
            "city": "Gryfino",
            "placeName": "RCKiK Szczecin Mobile Gryfino",
            "address": "Boleslawa Chrobrego 52",
            "isMobilePoint": true,
            "latitude": "53.256389",
            "longitude": "14.4871003"
        },
        {
            "city": "Hajnowka",
            "placeName": "RCKiK Bialystok OT Hajnowka",
            "address": "Doc Adama Dowgirda 9",
            "isMobilePoint": false,
            "latitude": "52.7461334",
            "longitude": "23.6097544"
        },
        {
            "city": "Ilawa",
            "placeName": "RCKiK Olsztyn OT Ilawa",
            "address": "Wladysława Andersa 3",
            "isMobilePoint": false,
            "latitude": "53.586071",
            "longitude": "19.5641733"
        },
        {
            "city": "Inowrocław",
            "placeName": "RCKiK Bydgoszcz OT Inowrocław",
            "address": "Poznanska 97",
            "isMobilePoint": false,
            "latitude": "52.780594",
            "longitude": "18.2612729"
        },
        {
            "city": "Jaslo",
            "placeName": "RCKiK Rzeszow OT Jaslo",
            "address": "Lwowska 22",
            "isMobilePoint": false,
            "latitude": "49.7522512",
            "longitude": "21.4783241"
        },
        {
            "city": "Jastrzebie-Zdroj",
            "placeName": "RCKiK Raciborz OT Jastrzebie-Zdroj",
            "address": "Jana Pawla II 7",
            "isMobilePoint": false,
            "latitude": "49.9474899",
            "longitude": "18.5841151"
        },
        {
            "city": "Jelenia Gora",
            "placeName": "RCKiK Walbrzych Mobile Jelenia Gora",
            "address": "Oginskiego 6",
            "isMobilePoint": true,
            "latitude": "50.9132539",
            "longitude": "15.7613063"
        },
        {
            "city": "Kalisz",
            "placeName": "RCKiK Kalisz",
            "address": "Kaszubska 9",
            "isMobilePoint": false,
            "latitude": "51.7701199",
            "longitude": "18.1014748"
        },
        {
            "city": "Kartuzy",
            "placeName": "RCKiK Gdansk OT Kartuzy",
            "address": "Floriana Ceynowy 7",
            "isMobilePoint": false,
            "latitude": "54.3511828",
            "longitude": "18.3439446"
        },
        {
            "city": "Katowice",
            "placeName": "RCKiK Katowice",
            "address": "Raciborska 15",
            "isMobilePoint": false,
            "latitude": "50.2556283",
            "longitude": "19.004134"
        },
        {
            "city": "Kedzierzyn-Kozle",
            "placeName": "RCKiK Opole OT Kedzierzyn-Kozle",
            "address": "Koszykowa 5B",
            "isMobilePoint": false,
            "latitude": "50.342264",
            "longitude": "18.1974932"
        },
        {
            "city": "Kielce",
            "placeName": "RCKiK Kielce",
            "address": "Jagiellonska 66",
            "isMobilePoint": false,
            "latitude": "50.873219",
            "longitude": "20.6031323"
        },
        {
            "city": "Klodzko",
            "placeName": "RCKiK Walbrzych Mobile Klodzko",
            "address": "Szpitalna 1",
            "isMobilePoint": true,
            "latitude": "50.455169",
            "longitude": "16.6568273"
        },
        {
            "city": "Kluczbork",
            "placeName": "RCKiK Opole OT Kluczbork",
            "address": "Katowicka 26",
            "isMobilePoint": false,
            "latitude": "50.9739159",
            "longitude": "18.2225117"
        },
        {
            "city": "Knurow",
            "placeName": "RCKiK Katowice Mobile Knurow",
            "address": "Dworcowa 1",
            "isMobilePoint": true,
            "latitude": "50.2147069",
            "longitude": "18.7391722"
        },
        {
            "city": "Kolobrzeg",
            "placeName": "RCKiK Szczecin OT Kolobrzeg",
            "address": "Lopuskiego 31",
            "isMobilePoint": false,
            "latitude": "54.174473",
            "longitude": "15.5676531"
        },
        {
            "city": "Konin",
            "placeName": "RCKiK Kalisz OT Konin",
            "address": "Wyszynskiego 1",
            "isMobilePoint": false,
            "latitude": "52.2263837",
            "longitude": "18.2640829"
        },
        {
            "city": "Konskie",
            "placeName": "RCKiK Kielce OT Konskie",
            "address": "Gimnazjalna 41b",
            "isMobilePoint": false,
            "latitude": "51.1257134",
            "longitude": "20.1616468"
        },
        {
            "city": "Koscian",
            "placeName": "RCKiK Poznan OT Koscian",
            "address": "Szpitalna 7",
            "isMobilePoint": false,
            "latitude": "52.084784",
            "longitude": "16.647422"
        },
        {
            "city": "Koscierzyna",
            "placeName": "RCKiK Gdansk OT Koscierzyna",
            "address": "Alojzego Piechowskiego 36",
            "isMobilePoint": false,
            "latitude": "54.121273",
            "longitude": "17.949956"
        },
        {
            "city": "Koszalin",
            "placeName": "RCKiK Szczecin OT Koszalin",
            "address": "Chalubinskiego 7",
            "isMobilePoint": false,
            "latitude": "54.1980926",
            "longitude": "16.2138479"
        },
        {
            "city": "Kozienice",
            "placeName": "RCKiK Radom OT Kozienice",
            "address": "gen. Wladysława Sikorskiego 10",
            "isMobilePoint": false,
            "latitude": "51.5919647",
            "longitude": "21.5226724"
        },
        {
            "city": "Krakow",
            "placeName": "RCKiK Krakow OT Krakow",
            "address": "Wielicka 265",
            "isMobilePoint": false,
            "latitude": "49.895291",
            "longitude": "19.676042"
        },
        {
            "city": "Krakow",
            "placeName": "RCKiK Krakow",
            "address": "Rzeznicza 11",
            "isMobilePoint": false,
            "latitude": "50.056115",
            "longitude": "19.9540891"
        },
        {
            "city": "Krakow",
            "placeName": "WCKiK MON Krakow",
            "address": "Wroclawska 1-3",
            "isMobilePoint": false,
            "latitude": "50.075303",
            "longitude": "19.932968"
        },
        {
            "city": "Krasnik",
            "placeName": "RCKiK Lublin OT Krasnik",
            "address": "Al. Niepodleglości 25",
            "isMobilePoint": false,
            "latitude": "50.9628668",
            "longitude": "22.1631722"
        },
        {
            "city": "Krosno",
            "placeName": "RCKiK Rzeszow OT Krosno",
            "address": "Korczynska 57",
            "isMobilePoint": false,
            "latitude": "49.705474",
            "longitude": "21.7847761"
        },
        {
            "city": "Krotoszyn",
            "placeName": "RCKiK Kalisz OT Krotoszyn",
            "address": "Bolewskiego 8",
            "isMobilePoint": false,
            "latitude": "51.7292197",
            "longitude": "17.6310693"
        },
        {
            "city": "Kutno",
            "placeName": "RCKiK Lodz Mobile Kutno",
            "address": "Kosciuszki 52",
            "isMobilePoint": true,
            "latitude": "52.238855",
            "longitude": "19.3693823"
        },
        {
            "city": "Lebork",
            "placeName": "RCKiK Slupsk OT Lebork",
            "address": "Wegrzynowicza 13",
            "isMobilePoint": false,
            "latitude": "54.538561",
            "longitude": "17.751546"
        },
        {
            "city": "Legnica",
            "placeName": "RCKiK Wroclaw OT Legnica",
            "address": "Iwaszkiewicza 5",
            "isMobilePoint": false,
            "latitude": "51.208287",
            "longitude": "16.2167819"
        },
        {
            "city": "Leszno",
            "placeName": "RCKiK Poznan OT Leszno",
            "address": "Kiepury 45",
            "isMobilePoint": false,
            "latitude": "51.8383189",
            "longitude": "16.6078309"
        },
        {
            "city": "Lezajsk",
            "placeName": "RCKiK Rzeszow OT Lezajsk",
            "address": "Lesna 22",
            "isMobilePoint": false,
            "latitude": "50.2718433",
            "longitude": "22.4006991"
        },
        {
            "city": "Limanowa",
            "placeName": "RCKiK Krakow OT Limanowa",
            "address": "Pilsudskiego 61",
            "isMobilePoint": false,
            "latitude": "49.715954",
            "longitude": "20.413518"
        },
        {
            "city": "Lipno",
            "placeName": "RCKiK Bydgoszcz Mobile Lipno",
            "address": "Pl. Dekerta",
            "isMobilePoint": true,
            "latitude": "52.8460878",
            "longitude": "19.1785088"
        },
        {
            "city": "Lodz",
            "placeName": "RCKiK Lodz",
            "address": "Franciszkanska 17/25",
            "isMobilePoint": false,
            "latitude": "51.7821982",
            "longitude": "19.4592654"
        },
        {
            "city": "Lomza",
            "placeName": "RCKiK Bialystok OT Lomza",
            "address": "Al. Pilsudskiego 11",
            "isMobilePoint": false,
            "latitude": "53.1643785",
            "longitude": "22.061539"
        },
        {
            "city": "Luban",
            "placeName": "RCKiK Walbrzych Mobile Luban",
            "address": "Wojska Polskiego 2",
            "isMobilePoint": true,
            "latitude": "51.1217981",
            "longitude": "15.2802755"
        },
        {
            "city": "Lubartow",
            "placeName": "RCKiK Lublin OT Lubartow",
            "address": "Cicha 14",
            "isMobilePoint": false,
            "latitude": "51.4566919",
            "longitude": "22.617328"
        },
        {
            "city": "Lubin",
            "placeName": "RCKiK Wroclaw OT Lubin",
            "address": "Bema 5",
            "isMobilePoint": false,
            "latitude": "51.4009111",
            "longitude": "16.1977087"
        },
        {
            "city": "Lublin",
            "placeName": "RCKiK Lublin OT Lublin",
            "address": "Al. Krasnicka 100",
            "isMobilePoint": false,
            "latitude": "51.244186",
            "longitude": "22.521315"
        },
        {
            "city": "Lublin",
            "placeName": "RCKiK Lublin",
            "address": "Zolnierzy Niepodleglej 8",
            "isMobilePoint": false,
            "latitude": "51.2486696",
            "longitude": "22.5542332"
        },
        {
            "city": "Lublin",
            "placeName": "WCKiK MON Lublin",
            "address": "Al. Raclawickie 23",
            "isMobilePoint": false,
            "latitude": "51.2513066",
            "longitude": "22.5318338"
        },
        {
            "city": "Lukow",
            "placeName": "RCKiK Lublin OT Lukow",
            "address": "Andrzeja Rogalinskiego 3",
            "isMobilePoint": false,
            "latitude": "51.9248692",
            "longitude": "22.3768378"
        },
        {
            "city": "Lwowek Slaski",
            "placeName": "RCKiK Walbrzych Mobile Lwowek Slaski",
            "address": "Al. Wojska Polskiego 25A",
            "isMobilePoint": true,
            "latitude": "51.109359",
            "longitude": "15.5788463"
        },
        {
            "city": "Malbork",
            "placeName": "RCKiK Gdansk OT Malbork",
            "address": "Kotarbinskiego 14",
            "isMobilePoint": false,
            "latitude": "54.023067",
            "longitude": "19.043276"
        },
        {
            "city": "Miedzyrzecz",
            "placeName": "RCKiK Zielona Gora OT Miedzyrzecz",
            "address": "Konstytucji 3 Maja 24",
            "isMobilePoint": false,
            "latitude": "52.4419824",
            "longitude": "15.5792628"
        },
        {
            "city": "Mielec",
            "placeName": "RCKiK Rzeszow OT Mielec",
            "address": "Zeromskiego 17",
            "isMobilePoint": false,
            "latitude": "50.2895147",
            "longitude": "21.435599"
        },
        {
            "city": "Mlawa",
            "placeName": "RCKiK Warszawa OT Mlawa",
            "address": "A. Dobrskiej 1",
            "isMobilePoint": false,
            "latitude": "53.1233972",
            "longitude": "20.3690212"
        },
        {
            "city": "Myslenice",
            "placeName": "RCKiK Krakow OT Myslenice",
            "address": "Szpitalna 2",
            "isMobilePoint": false,
            "latitude": "49.8289533",
            "longitude": "19.9464418"
        },
        {
            "city": "Naklo",
            "placeName": "RCKiK Bydgoszcz Mobile Naklo",
            "address": "Dabrowskiego 50",
            "isMobilePoint": true,
            "latitude": "53.1375017",
            "longitude": "17.5910271"
        },
        {
            "city": "Nidzica",
            "placeName": "RCKiK Olsztyn OT Nidzica",
            "address": "Traugutta 13",
            "isMobilePoint": false,
            "latitude": "53.36168",
            "longitude": "20.42009"
        },
        {
            "city": "Nowy Dwor Mazowiecki",
            "placeName": "RCKiK Warszawa OT Nowy Dwor Mazowiecki",
            "address": "Paderewskiego 7",
            "isMobilePoint": false,
            "latitude": "52.3300122",
            "longitude": "20.7491911"
        },
        {
            "city": "Nowy Sacz",
            "placeName": "RCKiK Krakow OT Nowy Sacz",
            "address": "Kazimierza Wielkiego 9a",
            "isMobilePoint": false,
            "latitude": "49.6713936",
            "longitude": "20.4816014"
        },
        {
            "city": "Nowy Targ",
            "placeName": "RCKiK Krakow OT Nowy Targ",
            "address": "Szpitalna 12",
            "isMobilePoint": false,
            "latitude": "49.679",
            "longitude": "19.5869912"
        },
        {
            "city": "Nowy Tomysl",
            "placeName": "RCKiK Poznan OT Nowy Tomysl",
            "address": "Sienkiewicza 7",
            "isMobilePoint": false,
            "latitude": "52.3147474",
            "longitude": "16.1407512"
        },
        {
            "city": "Nysa",
            "placeName": "RCKiK Opole OT Nysa",
            "address": "Pilsudskiego 47",
            "isMobilePoint": false,
            "latitude": "50.4590655",
            "longitude": "17.3508773"
        },
        {
            "city": "Olsztyn",
            "placeName": "RCKiK Olsztyn",
            "address": "Malborska 2",
            "isMobilePoint": false,
            "latitude": "53.7934661",
            "longitude": "20.4877982"
        },
        {
            "city": "Opole",
            "placeName": "DAWDWA",
            "address": "Bielska 24",
            "isMobilePoint": false,
            "latitude": "50.672657",
            "longitude": "17.970942"
        },
        {
            "city": "Opole",
            "placeName": "RCKiK Opole",
            "address": "Kosnego 55",
            "isMobilePoint": false,
            "latitude": "50.6705237",
            "longitude": "17.9368284"
        },
        {
            "city": "Ostrow Wielkopolski",
            "placeName": "RCKiK Kalisz OT Ostrow Wielkopolski",
            "address": "Limanowskiego 20-22",
            "isMobilePoint": false,
            "latitude": "51.6543739",
            "longitude": "17.8241877"
        },
        {
            "city": "Ostrowiec Swietokrzyski",
            "placeName": "RCKiK Kielce OT Ostrowiec Swietokrzyski",
            "address": "Szymanowskiego 11",
            "isMobilePoint": false,
            "latitude": "50.9528291",
            "longitude": "21.3592531"
        },
        {
            "city": "Ostrzeszow",
            "placeName": "RCKiK Kalisz OT Ostrzeszow",
            "address": "Zamkowa 17",
            "isMobilePoint": false,
            "latitude": "51.5984929",
            "longitude": "17.8764888"
        },
        {
            "city": "Oswiecim",
            "placeName": "RCKiK Krakow OT Oswiecim",
            "address": "Wysokie Brzegi 4",
            "isMobilePoint": false,
            "latitude": "50.040604",
            "longitude": "19.2373442"
        },
        {
            "city": "Pabianice",
            "placeName": "RCKiK Lodz Mobile Pabianice",
            "address": "Jana Pawla II 68",
            "isMobilePoint": true,
            "latitude": "51.6522407",
            "longitude": "19.3277146"
        },
        {
            "city": "Paslek",
            "placeName": "RCKiK Olsztyn OT Paslek",
            "address": "Plac Grunwaldzki 8",
            "isMobilePoint": false,
            "latitude": "54.058565",
            "longitude": "19.6647111"
        },
        {
            "city": "Pila",
            "placeName": "RCKiK Poznan OT Pila",
            "address": "Rydygiera 1",
            "isMobilePoint": false,
            "latitude": "53.121822",
            "longitude": "16.7193669"
        },
        {
            "city": "Piotrkow Trybunalski",
            "placeName": "RCKiK Lodz Mobile Piotrkow Trybunalski",
            "address": "Slowackiego 74",
            "isMobilePoint": true,
            "latitude": "51.4091206",
            "longitude": "19.6752494"
        },
        {
            "city": "Plock",
            "placeName": "RCKiK Warszawa OT Plock",
            "address": "Medyczna 19",
            "isMobilePoint": false,
            "latitude": "52.5570144",
            "longitude": "19.6539631"
        },
        {
            "city": "Poznan",
            "placeName": "RCKiK Poznan OT Poznan",
            "address": "Juraszów 7",
            "isMobilePoint": false,
            "latitude": "52.4226399",
            "longitude": "16.8771565"
        },
        {
            "city": "Poznan",
            "placeName": "RCKiK Poznan",
            "address": "Marcelinska 44",
            "isMobilePoint": false,
            "latitude": "52.4042626",
            "longitude": "16.8808876"
        },
        {
            "city": "Przemysl",
            "placeName": "RCKiK Rzeszow OT Przemysl",
            "address": "Monte Cassino 18",
            "isMobilePoint": false,
            "latitude": "49.8085494",
            "longitude": "22.7808231"
        },
        {
            "city": "Pszczyna",
            "placeName": "RCKiK Katowice OT Pszczyna",
            "address": "Biskupa Bednorza 10",
            "isMobilePoint": false,
            "latitude": "49.9703983",
            "longitude": "18.9436401"
        },
        {
            "city": "Pulawy",
            "placeName": "RCKiK Lublin OT Pulawy",
            "address": "Bema 1",
            "isMobilePoint": false,
            "latitude": "51.4216979",
            "longitude": "21.9746804"
        },
        {
            "city": "Raciborz",
            "placeName": "RCKiK Raciborz",
            "address": "Sienkiewicza 3A",
            "isMobilePoint": false,
            "latitude": "50.0879199",
            "longitude": "18.2178773"
        },
        {
            "city": "Radom",
            "placeName": "RCKiK Radom",
            "address": "Limanowskiego 42",
            "isMobilePoint": false,
            "latitude": "51.3979737",
            "longitude": "21.1353336"
        },
        {
            "city": "Radomsko",
            "placeName": "RCKiK Kielce Mobile Radomsko",
            "address": "Jagiellonska 36",
            "isMobilePoint": true,
            "latitude": "51.0568457",
            "longitude": "19.4563583"
        },
        {
            "city": "Radziejow",
            "placeName": "RCKiK Bydgoszcz Mobile Radziejow",
            "address": "Kosciuszki 17",
            "isMobilePoint": true,
            "latitude": "52.6227809",
            "longitude": "18.5253852"
        },
        {
            "city": "Rybnik",
            "placeName": "RCKiK Raciborz OT Rybnik",
            "address": "Rudzka 15",
            "isMobilePoint": false,
            "latitude": "50.1002264",
            "longitude": "18.5367638"
        },
        {
            "city": "Rypin",
            "placeName": "RCKiK Bydgoszcz Mobile Rypin",
            "address": "3 Maja 2",
            "isMobilePoint": true,
            "latitude": "53.0672255",
            "longitude": "19.4137211"
        },
        {
            "city": "Rzeszow",
            "placeName": "RCKiK Rzeszow",
            "address": "Wierzbowa 14",
            "isMobilePoint": false,
            "latitude": "50.0334889",
            "longitude": "22.0130973"
        },
        {
            "city": "Sandomierz",
            "placeName": "RCKiK Kielce OT Sandomierz",
            "address": "Schinzla 13",
            "isMobilePoint": false,
            "latitude": "50.7553383",
            "longitude": "20.9178641"
        },
        {
            "city": "Sanok",
            "placeName": "RCKiK Rzeszow OT Sanok",
            "address": "Konarskiego 24",
            "isMobilePoint": false,
            "latitude": "49.5522192",
            "longitude": "22.199985"
        },
        {
            "city": "Siedlce",
            "placeName": "RCKiK Warszawa OT Siedlce",
            "address": "Forminskiego 14",
            "isMobilePoint": false,
            "latitude": "52.1976765",
            "longitude": "21.3880605"
        },
        {
            "city": "Sieradz",
            "placeName": "RCKiK Lodz Mobile Sieradz",
            "address": "Armii Krajowej 7",
            "isMobilePoint": true,
            "latitude": "51.5820268",
            "longitude": "18.7082217"
        },
        {
            "city": "Skarzysko-Kamienna",
            "placeName": "RCKiK Kielce OT Skarzysko-Kamienna",
            "address": "Szpitalna 1",
            "isMobilePoint": false,
            "latitude": "51.1261577",
            "longitude": "20.8666262"
        },
        {
            "city": "Skierniewice",
            "placeName": "RCKiK Lodz Mobile Skierniewice",
            "address": "Senatorska 12",
            "isMobilePoint": true,
            "latitude": "51.9583848",
            "longitude": "20.1395537"
        },
        {
            "city": "Slupsk",
            "placeName": "RCKiK Slupsk",
            "address": "Szarych Szeregow 21",
            "isMobilePoint": false,
            "latitude": "54.46976",
            "longitude": "17.0304172"
        },
        {
            "city": "Sosnowiec",
            "placeName": "RCKiK Katowice OT Sosnowiec",
            "address": "Zegadlowicza 3",
            "isMobilePoint": false,
            "latitude": "50.2881303",
            "longitude": "19.0565677"
        },
        {
            "city": "Srem",
            "placeName": "RCKiK Poznan OT Srem",
            "address": "Chelmonskiego 1",
            "isMobilePoint": false,
            "latitude": "52.08929",
            "longitude": "17.007114"
        },
        {
            "city": "Stalowa Wola",
            "placeName": "RCKiK Rzeszow OT Stalowa Wola",
            "address": "Staszica 4",
            "isMobilePoint": false,
            "latitude": "50.5629912",
            "longitude": "22.0675332"
        },
        {
            "city": "Starachowice",
            "placeName": "RCKiK Kielce Mobile Starachowice",
            "address": "Radomska 70",
            "isMobilePoint": true,
            "latitude": "51.064462",
            "longitude": "21.0710655"
        },
        {
            "city": "Stargard Szczecinski",
            "placeName": "RCKiK Szczecin Mobile Stargard Szczecinski",
            "address": "Pl. Wolnosci 1",
            "isMobilePoint": true,
            "latitude": "53.3400111",
            "longitude": "15.0348198"
        },
        {
            "city": "Starogard Gdanski",
            "placeName": "RCKiK Gdansk OT Starogard Gdanski",
            "address": "dr Jozefa Balewskiego 1",
            "isMobilePoint": false,
            "latitude": "53.9677103",
            "longitude": "18.5060738"
        },
        {
            "city": "Sucha Beskidzka",
            "placeName": "RCKiK Krakow OT Sucha Beskidzka",
            "address": "Szpitalna 22",
            "isMobilePoint": false,
            "latitude": "49.7365629",
            "longitude": "19.6050049"
        },
        {
            "city": "Sulecin",
            "placeName": "RCKiK Zielona Gora OT Sulecin",
            "address": "Dudka 15",
            "isMobilePoint": false,
            "latitude": "52.1909185",
            "longitude": "15.0697734"
        },
        {
            "city": "Suwalki",
            "placeName": "RCKiK Bialystok OT Suwalki",
            "address": "Szpitalna 60",
            "isMobilePoint": false,
            "latitude": "54.119514",
            "longitude": "22.9253912"
        },
        {
            "city": "Swiecie",
            "placeName": "RCKiK Bydgoszcz Mobile Swiecie",
            "address": "Wojska Polskiego 173",
            "isMobilePoint": true,
            "latitude": "53.411462",
            "longitude": "18.4530203"
        },
        {
            "city": "Swinoujscie",
            "placeName": "RCKiK Szczecin OT Swinoujscie",
            "address": "Mieszka 1-go 4",
            "isMobilePoint": false,
            "latitude": "53.6734748",
            "longitude": "14.1181102"
        },
        {
            "city": "Szamotuly",
            "placeName": "RCKiK Poznan OT Szamotuly",
            "address": "Sukiennicza 13",
            "isMobilePoint": false,
            "latitude": "52.6107816",
            "longitude": "16.5791524"
        },
        {
            "city": "Szczecin",
            "placeName": "RCKiK Szczecin",
            "address": "al. Wojska Polskiego 80/82",
            "isMobilePoint": false,
            "latitude": "53.4366765",
            "longitude": "14.5344951"
        },
        {
            "city": "Szczecin",
            "placeName": "WCKiK MON Szczecin",
            "address": "Piotra Skargi 9-11",
            "isMobilePoint": false,
            "latitude": "53.4431097",
            "longitude": "14.5401499"
        },
        {
            "city": "Tarnobrzeg",
            "placeName": "RCKiK Rzeszow Mobile Tarnobrzeg",
            "address": "1 Maja 1",
            "isMobilePoint": true,
            "latitude": "50.5708969",
            "longitude": "21.6635243"
        },
        {
            "city": "Tarnow",
            "placeName": "RCKiK Krakow OT Tarnow 1",
            "address": "Szpitalna 13",
            "isMobilePoint": false,
            "latitude": "50.056115",
            "longitude": "19.9540891"
        },
        {
            "city": "Tarnow",
            "placeName": "RCKiK Krakow OT Tarnow 2",
            "address": "Lwowska 178a",
            "isMobilePoint": false,
            "latitude": "50.0129702",
            "longitude": "21.0336387"
        },
        {
            "city": "Tarnowskie Gory",
            "placeName": "RCKiK Katowice OT Tarnowskie Gory",
            "address": "Pyskowicka 47",
            "isMobilePoint": false,
            "latitude": "50.3528143",
            "longitude": "18.8525866"
        },
        {
            "city": "Tczew",
            "placeName": "RCKiK Gdansk OT Tczew",
            "address": "Piaskowa 3",
            "isMobilePoint": false,
            "latitude": "54.087699",
            "longitude": "18.78588"
        },
        {
            "city": "Tomaszow Lubelski",
            "placeName": "RCKiK Lublin OT Tomaszow Lubelski",
            "address": "Lwowska 82",
            "isMobilePoint": false,
            "latitude": "50.4420539",
            "longitude": "23.415471"
        },
        {
            "city": "Tomaszow Mazowiecki",
            "placeName": "RCKiK Lodz Mobile Tomaszow Mazowiecki",
            "address": "Jana Pawla II 35",
            "isMobilePoint": true,
            "latitude": "51.5230413",
            "longitude": "20.0028299"
        },
        {
            "city": "Torun",
            "placeName": "RCKiK Bydgoszcz OT Torun",
            "address": "Gagarina 212-226",
            "isMobilePoint": false,
            "latitude": "53.0181186",
            "longitude": "18.5777602"
        },
        {
            "city": "Wadowice",
            "placeName": "RCKiK Krakow OT Wadowice",
            "address": "Karmelicka 5",
            "isMobilePoint": false,
            "latitude": "49.8803373",
            "longitude": "19.4918248"
        },
        {
            "city": "Wagrowiec",
            "placeName": "RCKiK Poznan OT Wagrowiec",
            "address": "Kosciuszki 74",
            "isMobilePoint": false,
            "latitude": "52.8178896",
            "longitude": "17.2026899"
        },
        {
            "city": "Walbrzych",
            "placeName": "RCKiK Walbrzych",
            "address": "Chrobrego 31",
            "isMobilePoint": false,
            "latitude": "50.7741414",
            "longitude": "16.2727622"
        },
        {
            "city": "Warszawa",
            "placeName": "RCKiK Warszawa OT Warszawa 1",
            "address": "Ceglowska 80",
            "isMobilePoint": false,
            "latitude": "52.2870673",
            "longitude": "20.948657"
        },
        {
            "city": "Warszawa",
            "placeName": "RCKiK Warszawa OT Warszawa 2",
            "address": "Nowogrodzka 59",
            "isMobilePoint": false,
            "latitude": "52.226199",
            "longitude": "20.9987085"
        },
        {
            "city": "Warszawa",
            "placeName": "RCKiK Warszawa",
            "address": "Saska 63",
            "isMobilePoint": false,
            "latitude": "52.2327098",
            "longitude": "21.0577082"
        },
        {
            "city": "Warszawa",
            "placeName": "WCKiK MON Warsaw",
            "address": "Szaserów 128",
            "isMobilePoint": false,
            "latitude": "52.251046",
            "longitude": "21.0863523"
        },
        {
            "city": "Warszawa",
            "placeName": "WCKiK MSW Warsaw",
            "address": "Woloska 137",
            "isMobilePoint": false,
            "latitude": "52.1988993",
            "longitude": "20.9953322"
        },
        {
            "city": "Wejherowo",
            "placeName": "RCKiK Gdansk OT Wejherowo",
            "address": "Weteranow 10",
            "isMobilePoint": false,
            "latitude": "54.6051939",
            "longitude": "18.2549349"
        },
        {
            "city": "Wiecbork",
            "placeName": "RCKiK Bydgoszcz Mobile Wiecbork",
            "address": "Pl. Jana Pawa II",
            "isMobilePoint": true,
            "latitude": "53.3512237",
            "longitude": "17.4864754"
        },
        {
            "city": "Wielun",
            "placeName": "RCKiK Lodz Mobile Wielun",
            "address": "Sieradzka 56",
            "isMobilePoint": true,
            "latitude": "51.2285177",
            "longitude": "18.561783"
        },
        {
            "city": "Wloclawek",
            "placeName": "RCKiK Bydgoszcz OT Wloclawek",
            "address": "Lunewil 15",
            "isMobilePoint": false,
            "latitude": "52.6588794",
            "longitude": "19.056255"
        },
        {
            "city": "Wlodawa",
            "placeName": "RCKiK Lublin OT Wlodawa",
            "address": "Al. J. Pilsudskiego 66",
            "isMobilePoint": false,
            "latitude": "51.5582193",
            "longitude": "23.5512022"
        },
        {
            "city": "Wodzislaw Slaski",
            "placeName": "RCKiK Raciborz OT Wodzislaw Slaski",
            "address": "Radlinska 68",
            "isMobilePoint": false,
            "latitude": "50.0153936",
            "longitude": "18.4581013"
        },
        {
            "city": "Wolsztyn",
            "placeName": "RCKiK Poznan OT Wolsztyn",
            "address": "Wschowska 3",
            "isMobilePoint": false,
            "latitude": "52.1163103",
            "longitude": "16.1152272"
        },
        {
            "city": "Wroclaw",
            "placeName": "RCKiK Wroclaw",
            "address": "Czerwonego Krzyza 5",
            "isMobilePoint": false,
            "latitude": "51.1159722",
            "longitude": "17.0636376"
        },
        {
            "city": "Wroclaw",
            "placeName": "WCKiK MON Wroclaw",
            "address": "Rudolfa Weigla 5",
            "isMobilePoint": false,
            "latitude": "51.0747829",
            "longitude": "17.0199318"
        },
        {
            "city": "Wrzesnia",
            "placeName": "RCKiK Poznan OT Wrzesnia",
            "address": "Slowackiego 2",
            "isMobilePoint": false,
            "latitude": "52.325057",
            "longitude": "17.5733741"
        },
        {
            "city": "Zabrze",
            "placeName": "RCKiK Katowice OT Zabrze",
            "address": "Wolnosci 265-267",
            "isMobilePoint": false,
            "latitude": "50.3070619",
            "longitude": "18.7814811"
        },
        {
            "city": "Zagan",
            "placeName": "RCKiK Zielona Gora OT Zagan",
            "address": "Szprotawska 45a",
            "isMobilePoint": false,
            "latitude": "51.6277486",
            "longitude": "15.2005223"
        },
        {
            "city": "Zakopane",
            "placeName": "RCKiK Krakow OT Zakopane",
            "address": "Szymony 14",
            "isMobilePoint": false,
            "latitude": "49.3045891",
            "longitude": "19.9614258"
        },
        {
            "city": "Zamosc",
            "placeName": "RCKiK Lublin OT Zamosc",
            "address": "Al. Jana Pawla II 10",
            "isMobilePoint": false,
            "latitude": "50.7122198",
            "longitude": "23.287981"
        },
        {
            "city": "Zary",
            "placeName": "RCKiK Zielona Gora OT Zary",
            "address": "Skarbowa 2",
            "isMobilePoint": false,
            "latitude": "51.6429769",
            "longitude": "15.1381854"
        },
        {
            "city": "Zawiercie",
            "placeName": "RCKiK Katowice Mobile Zawiercie",
            "address": "Jozefa Pilsudskiego 81c",
            "isMobilePoint": true,
            "latitude": "50.4910758",
            "longitude": "19.4305194"
        },
        {
            "city": "Zdunska Wola",
            "placeName": "RCKiK Lodz Mobile Zdunska Wola",
            "address": "Krolewska 29",
            "isMobilePoint": true,
            "latitude": "51.6042377",
            "longitude": "18.9403342"
        },
        {
            "city": "Zgorzelec",
            "placeName": "RCKiK Walbrzych Mobile Zgorzelec",
            "address": "Maratonska 2",
            "isMobilePoint": true,
            "latitude": "51.1458853",
            "longitude": "15.0079179"
        },
        {
            "city": "Zielona Gora",
            "placeName": "RCKiK Zielona Gora",
            "address": "Zyty 21",
            "isMobilePoint": false,
            "latitude": "51.9405182",
            "longitude": "15.5167508"
        },
        {
            "city": "Zywiec",
            "placeName": "RCKiK Katowice Mobile Zywiec",
            "address": "al. Jozefa Pilsudskiego 50",
            "isMobilePoint": true,
            "latitude": "49.68618",
            "longitude": "19.2048425"
        }
    ]

    function generateLocalTiles(data: any) {
        let localTiles = []
        for (let i = 0; i < data.length; ++i) {
            let isMobile = data[i]['isMobilePoint'];
            if (!isMobile && displayMobileOnly) {
                continue;
            }
            let placeName = data[i]['placeName'];
            let address = data[i]['address'];
            let city = data[i]['city'];
            localTiles.push(
                <CollectionPointTile key={placeName + 'Tile'} placeName={placeName} address={address} city={city}
                                     isMobile={isMobile}/>
            );
        }
        return localTiles;
    }

    function swapDisplayMobileOnly() {
        setDisplayMobileOnly((state) => !state);
    }

    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Blood Collection Points</h1>
                <h2>Check on the map where you can donate</h2>
            </div>

            <div className='locals-container'>
                <div>
                    <div id='mapID'>
                        <MyMap data={data} filter={displayMobileOnly}/>
                    </div>
                    <div onClick={swapDisplayMobileOnly}>{
                        <ManyRadiobuttonsNoDefault name='mobileonly' labels={['Mobile points only']} values={['0']}
                                                   ids={['mobileRadio']}/>
                    }
                    </div>
                </div>
                <div className='collection-tiles-container'>
                    {generateLocalTiles(data)}
                </div>


            </div>

            <BottomBar/>
        </div>
    );


}


export default CollectionPoints;
