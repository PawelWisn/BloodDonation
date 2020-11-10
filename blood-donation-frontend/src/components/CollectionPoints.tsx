import React from "react";
import './CollectionPoints.scss';
import UpperBar from "./UpperBar";
import ManyRadiobuttonsNoDefault from "./ManyRadiobuttonsNoDefault";
import BottomBar from "./BottomBar";
import CollectionPointTile from "./CollectionPointTile";
import L from "leaflet";
import MyMap from "./Map";
import "leaflet/dist/leaflet.css";

function CollectionPoints() {

    let data = [
        {
            "placeName": "RCKiK Szczecin Mobile Barlinek",
            "latitude": "52.9967477",
            "longitude": "15.2212969"
        },
        {
            "placeName": "RCKiK Olsztyn OT Bartoszyce",
            "latitude": "54.2586528",
            "longitude": "20.7964833"
        },
        {
            "placeName": "RCKiK Lodz Mobile Belchatow",
            "latitude": "51.3571705",
            "longitude": "19.364955"
        },
        {
            "placeName": "RCKiK Lublin OT Biala Podlaska",
            "latitude": "52.047289",
            "longitude": "23.1095191"
        },
        {
            "placeName": "RCKiK Szczecin OT Bialogard",
            "latitude": "54.0061506",
            "longitude": "16.0040568"
        },
        {
            "placeName": "RCKiK Bialystok",
            "latitude": "53.1256921",
            "longitude": "23.1604182"
        },
        {
            "placeName": "RCKiK Bialystok OT Bielsk Podlaski",
            "latitude": "52.7597153",
            "longitude": "23.2019586"
        },
        {
            "placeName": "RCKiK Katowice OT Bielsko-Biala",
            "latitude": "49.8232317",
            "longitude": "19.0356352"
        },
        {
            "placeName": "RCKiK Krakow OT Bochnia",
            "latitude": "49.9664099",
            "longitude": "20.4210931"
        },
        {
            "placeName": "RCKiK Walbrzych Mobile Bogatynia",
            "latitude": "50.9071062",
            "longitude": "14.9683775"
        },
        {
            "placeName": "RCKiK Walbrzych Mobile Boleslawiec",
            "latitude": "51.2620809",
            "longitude": "15.5680682"
        },
        {
            "placeName": "RCKiK Bydgoszcz OT Brodnica",
            "latitude": "53.245657",
            "longitude": "19.4038429"
        },
        {
            "placeName": "RCKiK Opole OT Brzeg",
            "latitude": "50.7637125",
            "longitude": "17.5682273"
        },
        {
            "placeName": "RCKiK Kielce Mobile Busko-Zdroj",
            "latitude": "50.46807",
            "longitude": "20.7024053"
        },
        {
            "placeName": "RCKiK Bydgoszcz",
            "latitude": "53.1256921",
            "longitude": "23.1604182"
        },
        {
            "placeName": "WCKiK MON Bydgoszcz",
            "latitude": "53.1424876",
            "longitude": "18.0130542"
        },
        {
            "placeName": "RCKiK Katowice OT Bytom",
            "latitude": "50.3528354",
            "longitude": "18.9204372"
        },
        {
            "placeName": "RCKiK Lublin OT Chelm",
            "latitude": "51.1496382",
            "longitude": "23.4512572"
        },
        {
            "placeName": "RCKiK Bydgoszcz Mobile Chelmno",
            "latitude": "53.344259",
            "longitude": "18.4185793"
        },
        {
            "placeName": "RCKiK Poznan OT Chodziez",
            "latitude": "52.988335",
            "longitude": "16.8455114"
        },
        {
            "placeName": "RCKiK Slupsk OT Chojnice",
            "latitude": "53.712112",
            "longitude": "17.5481381"
        },
        {
            "placeName": "RCKiK Warszawa OT Ciechanow",
            "latitude": "52.883691",
            "longitude": "20.634853"
        },
        {
            "placeName": "RCKiK Katowice OT Cieszyn",
            "latitude": "49.746183",
            "longitude": "18.6387329"
        },
        {
            "placeName": "RCKiK Poznan OT Czarnkow",
            "latitude": "52.9429821",
            "longitude": "16.6653994"
        },
        {
            "placeName": "RCKiK Katowice OT Czestochowa",
            "latitude": "50.8085114",
            "longitude": "19.1090593"
        },
        {
            "placeName": "RCKiK Katowice OT Dabrowa Gornicza",
            "latitude": "50.4471778",
            "longitude": "17.9288079"
        },
        {
            "placeName": "RCKiK Rzeszow OT Debica",
            "latitude": "50.038886",
            "longitude": "21.393327"
        },
        {
            "placeName": "RCKiK Szczecin OT Drawsko Pomorskie",
            "latitude": "53.5250149",
            "longitude": "15.8110014"
        },
        {
            "placeName": "RCKiK Walbrzych Mobile Dzierzaniow",
            "latitude": "50.728474",
            "longitude": "16.6511621"
        },
        {
            "placeName": "RCKiK Olsztyn OT Elblag",
            "latitude": "54.158151",
            "longitude": "19.432982"
        },
        {
            "placeName": "WCKiK MON Elk",
            "latitude": "53.8208875",
            "longitude": "22.3620194"
        },
        {
            "placeName": "RCKiK Warszawa OT Garwolin",
            "latitude": "51.870349",
            "longitude": "21.6363977"
        },
        {
            "placeName": "RCKiK Gdansk OT Gdansk",
            "latitude": "54.393989",
            "longitude": "18.566996"
        },
        {
            "placeName": "RCKiK Gdansk",
            "latitude": "54.3657176",
            "longitude": "18.6268638"
        },
        {
            "placeName": "WCKiK MON Terenowa Stacja Gdańsk",
            "latitude": "54.393989",
            "longitude": "18.566996"
        },
        {
            "placeName": "RCKiK Gdansk OT Gdynia",
            "latitude": "54.488554",
            "longitude": "18.5473332"
        },
        {
            "placeName": "RCKiK Olsztyn OT Gizycko",
            "latitude": "54.037377",
            "longitude": "21.768346"
        },
        {
            "placeName": "RCKiK Katowice OT Gliwice",
            "latitude": "50.302301",
            "longitude": "18.6642829"
        },
        {
            "placeName": "RCKiK Wroclaw OT Glogow",
            "latitude": "51.4757566",
            "longitude": "16.0047207"
        },
        {
            "placeName": "RCKiK Poznan OT Gniezno",
            "latitude": "52.5383831",
            "longitude": "17.5945071"
        },
        {
            "placeName": "RCKiK Bydgoszcz Mobile Golub-Dobrzyn",
            "latitude": "53.1091434",
            "longitude": "19.0515295"
        },
        {
            "placeName": "RCKiK Krakow OT Gorlice",
            "latitude": "49.6507019",
            "longitude": "21.162708"
        },
        {
            "placeName": "RCKiK Zielona Gora OT Gorzow Wielkopolski",
            "latitude": "52.7619617",
            "longitude": "15.2373307"
        },
        {
            "placeName": "RCKiK Radom OT Grojec",
            "latitude": "51.867812",
            "longitude": "20.8657792"
        },
        {
            "placeName": "RCKiK Bydgoszcz OT Grudziadz",
            "latitude": "53.4839433",
            "longitude": "18.7499041"
        },
        {
            "placeName": "RCKiK Szczecin OT Gryfice",
            "latitude": "53.924302",
            "longitude": "15.1744229"
        },
        {
            "placeName": "RCKiK Szczecin Mobile Gryfino",
            "latitude": "53.256389",
            "longitude": "14.4871003"
        },
        {
            "placeName": "RCKiK Bialystok OT Hajnowka",
            "latitude": "52.7461334",
            "longitude": "23.6097544"
        },
        {
            "placeName": "RCKiK Olsztyn OT Ilawa",
            "latitude": "53.586071",
            "longitude": "19.5641733"
        },
        {
            "placeName": "RCKiK Bydgoszcz OT Inowrocław",
            "latitude": "52.780594",
            "longitude": "18.2612729"
        },
        {
            "placeName": "RCKiK Rzeszow OT Jaslo",
            "latitude": "49.7522512",
            "longitude": "21.4783241"
        },
        {
            "placeName": "RCKiK Raciborz OT Jastrzebie-Zdroj",
            "latitude": "49.9474899",
            "longitude": "18.5841151"
        },
        {
            "placeName": "RCKiK Walbrzych Mobile Jelenia Gora",
            "latitude": "50.9132539",
            "longitude": "15.7613063"
        },
        {
            "placeName": "RCKiK Kalisz",
            "latitude": "51.7701199",
            "longitude": "18.1014748"
        },
        {
            "placeName": "RCKiK Gdansk OT Kartuzy",
            "latitude": "54.3511828",
            "longitude": "18.3439446"
        },
        {
            "placeName": "RCKiK Katowice",
            "latitude": "50.2556283",
            "longitude": "19.004134"
        },
        {
            "placeName": "RCKiK Opole OT Kedzierzyn-Kozle",
            "latitude": "50.342264",
            "longitude": "18.1974932"
        },
        {
            "placeName": "RCKiK Kielce",
            "latitude": "50.873219",
            "longitude": "20.6031323"
        },
        {
            "placeName": "RCKiK Walbrzych Mobile Klodzko",
            "latitude": "50.455169",
            "longitude": "16.6568273"
        },
        {
            "placeName": "RCKiK Opole OT Kluczbork",
            "latitude": "50.9739159",
            "longitude": "18.2225117"
        },
        {
            "placeName": "RCKiK Katowice Mobile Knurow",
            "latitude": "50.2147069",
            "longitude": "18.7391722"
        },
        {
            "placeName": "RCKiK Szczecin OT Kolobrzeg",
            "latitude": "54.174473",
            "longitude": "15.5676531"
        },
        {
            "placeName": "RCKiK Kalisz OT Konin",
            "latitude": "52.2263837",
            "longitude": "18.2640829"
        },
        {
            "placeName": "RCKiK Kielce OT Konskie",
            "latitude": "51.1257134",
            "longitude": "20.1616468"
        },
        {
            "placeName": "RCKiK Poznan OT Koscian",
            "latitude": "52.084784",
            "longitude": "16.647422"
        },
        {
            "placeName": "RCKiK Gdansk OT Koscierzyna",
            "latitude": "54.121273",
            "longitude": "17.949956"
        },
        {
            "placeName": "RCKiK Szczecin OT Koszalin",
            "latitude": "54.1980926",
            "longitude": "16.2138479"
        },
        {
            "placeName": "RCKiK Radom OT Kozienice",
            "latitude": "51.5919647",
            "longitude": "21.5226724"
        },
        {
            "placeName": "RCKiK Krakow OT Krakow",
            "latitude": "49.895291",
            "longitude": "19.676042"
        },
        {
            "placeName": "RCKiK Krakow",
            "latitude": "50.056115",
            "longitude": "19.9540891"
        },
        {
            "placeName": "WCKiK MON Krakow",
            "latitude": "50.075303",
            "longitude": "19.932968"
        },
        {
            "placeName": "RCKiK Lublin OT Krasnik",
            "latitude": "50.9628668",
            "longitude": "22.1631722"
        },
        {
            "placeName": "RCKiK Rzeszow OT Krosno",
            "latitude": "49.705474",
            "longitude": "21.7847761"
        },
        {
            "placeName": "RCKiK Kalisz OT Krotoszyn",
            "latitude": "51.7292197",
            "longitude": "17.6310693"
        },
        {
            "placeName": "RCKiK Lodz Mobile Kutno",
            "latitude": "52.238855",
            "longitude": "19.3693823"
        },
        {
            "placeName": "RCKiK Slupsk OT Lebork",
            "latitude": "54.538561",
            "longitude": "17.751546"
        },
        {
            "placeName": "RCKiK Wroclaw OT Legnica",
            "latitude": "51.208287",
            "longitude": "16.2167819"
        },
        {
            "placeName": "RCKiK Poznan OT Leszno",
            "latitude": "51.8383189",
            "longitude": "16.6078309"
        },
        {
            "placeName": "RCKiK Rzeszow OT Lezajsk",
            "latitude": "50.2718433",
            "longitude": "22.4006991"
        },
        {
            "placeName": "RCKiK Krakow OT Limanowa",
            "latitude": "49.715954",
            "longitude": "20.413518"
        },
        {
            "placeName": "RCKiK Bydgoszcz Mobile Lipno",
            "latitude": "52.8460878",
            "longitude": "19.1785088"
        },
        {
            "placeName": "RCKiK Lodz",
            "latitude": "51.7821982",
            "longitude": "19.4592654"
        },
        {
            "placeName": "RCKiK Bialystok OT Lomza",
            "latitude": "53.1643785",
            "longitude": "22.061539"
        },
        {
            "placeName": "RCKiK Walbrzych Mobile Luban",
            "latitude": "51.1217981",
            "longitude": "15.2802755"
        },
        {
            "placeName": "RCKiK Lublin OT Lubartow",
            "latitude": "51.4566919",
            "longitude": "22.617328"
        },
        {
            "placeName": "RCKiK Wroclaw OT Lubin",
            "latitude": "51.4009111",
            "longitude": "16.1977087"
        },
        {
            "placeName": "RCKiK Lublin OT Lublin",
            "latitude": "51.244186",
            "longitude": "22.521315"
        },
        {
            "placeName": "RCKiK Lublin",
            "latitude": "51.2486696",
            "longitude": "22.5542332"
        },
        {
            "placeName": "WCKiK MON Lublin",
            "latitude": "51.2513066",
            "longitude": "22.5318338"
        },
        {
            "placeName": "RCKiK Lublin OT Lukow",
            "latitude": "51.9248692",
            "longitude": "22.3768378"
        },
        {
            "placeName": "RCKiK Walbrzych Mobile Lwowek Slaski",
            "latitude": "51.109359",
            "longitude": "15.5788463"
        },
        {
            "placeName": "RCKiK Gdansk OT Malbork",
            "latitude": "54.023067",
            "longitude": "19.043276"
        },
        {
            "placeName": "RCKiK Zielona Gora OT Miedzyrzecz",
            "latitude": "52.4419824",
            "longitude": "15.5792628"
        },
        {
            "placeName": "RCKiK Rzeszow OT Mielec",
            "latitude": "50.2895147",
            "longitude": "21.435599"
        },
        {
            "placeName": "RCKiK Warszawa OT Mlawa",
            "latitude": "53.1233972",
            "longitude": "20.3690212"
        },
        {
            "placeName": "RCKiK Krakow OT Myslenice",
            "latitude": "49.8289533",
            "longitude": "19.9464418"
        },
        {
            "placeName": "RCKiK Bydgoszcz Mobile Naklo",
            "latitude": "53.1375017",
            "longitude": "17.5910271"
        },
        {
            "placeName": "RCKiK Olsztyn OT Nidzica",
            "latitude": "53.36168",
            "longitude": "20.42009"
        },
        {
            "placeName": "RCKiK Warszawa OT Nowy Dwor Mazowiecki",
            "latitude": "52.3300122",
            "longitude": "20.7491911"
        },
        {
            "placeName": "RCKiK Krakow OT Nowy Sacz",
            "latitude": "49.6713936",
            "longitude": "20.4816014"
        },
        {
            "placeName": "RCKiK Krakow OT Nowy Targ",
            "latitude": "49.679",
            "longitude": "19.5869912"
        },
        {
            "placeName": "RCKiK Poznan OT Nowy Tomysl",
            "latitude": "52.3147474",
            "longitude": "16.1407512"
        },
        {
            "placeName": "RCKiK Opole OT Nysa",
            "latitude": "50.4590655",
            "longitude": "17.3508773"
        },
        {
            "placeName": "RCKiK Olsztyn",
            "latitude": "53.7934661",
            "longitude": "20.4877982"
        },
        {
            "placeName": "DAWDWA",
            "latitude": "50.672657",
            "longitude": "17.970942"
        },
        {
            "placeName": "RCKiK Opole",
            "latitude": "50.6705237",
            "longitude": "17.9368284"
        },
        {
            "placeName": "RCKiK Kalisz OT Ostrow Wielkopolski",
            "latitude": "51.6543739",
            "longitude": "17.8241877"
        },
        {
            "placeName": "RCKiK Kielce OT Ostrowiec Swietokrzyski",
            "latitude": "50.9528291",
            "longitude": "21.3592531"
        },
        {
            "placeName": "RCKiK Kalisz OT Ostrzeszow",
            "latitude": "51.5984929",
            "longitude": "17.8764888"
        },
        {
            "placeName": "RCKiK Krakow OT Oswiecim",
            "latitude": "50.040604",
            "longitude": "19.2373442"
        },
        {
            "placeName": "RCKiK Lodz Mobile Pabianice",
            "latitude": "51.6522407",
            "longitude": "19.3277146"
        },
        {
            "placeName": "RCKiK Olsztyn OT Paslek",
            "latitude": "54.058565",
            "longitude": "19.6647111"
        },
        {
            "placeName": "RCKiK Poznan OT Pila",
            "latitude": "53.121822",
            "longitude": "16.7193669"
        },
        {
            "placeName": "RCKiK Lodz Mobile Piotrkow Trybunalski",
            "latitude": "51.4091206",
            "longitude": "19.6752494"
        },
        {
            "placeName": "RCKiK Warszawa OT Plock",
            "latitude": "52.5570144",
            "longitude": "19.6539631"
        },
        {
            "placeName": "RCKiK Poznan OT Poznan",
            "latitude": "52.4226399",
            "longitude": "16.8771565"
        },
        {
            "placeName": "RCKiK Poznan",
            "latitude": "52.4042626",
            "longitude": "16.8808876"
        },
        {
            "placeName": "RCKiK Rzeszow OT Przemysl",
            "latitude": "49.8085494",
            "longitude": "22.7808231"
        },
        {
            "placeName": "RCKiK Katowice OT Pszczyna",
            "latitude": "49.9703983",
            "longitude": "18.9436401"
        },
        {
            "placeName": "RCKiK Lublin OT Pulawy",
            "latitude": "51.4216979",
            "longitude": "21.9746804"
        },
        {
            "placeName": "RCKiK Raciborz",
            "latitude": "50.0879199",
            "longitude": "18.2178773"
        },
        {
            "placeName": "RCKiK Radom",
            "latitude": "51.3979737",
            "longitude": "21.1353336"
        },
        {
            "placeName": "RCKiK Kielce Mobile Radomsko",
            "latitude": "51.0568457",
            "longitude": "19.4563583"
        },
        {
            "placeName": "RCKiK Bydgoszcz Mobile Radziejow",
            "latitude": "52.6227809",
            "longitude": "18.5253852"
        },
        {
            "placeName": "RCKiK Raciborz OT Rybnik",
            "latitude": "50.1002264",
            "longitude": "18.5367638"
        },
        {
            "placeName": "RCKiK Bydgoszcz Mobile Rypin",
            "latitude": "53.0672255",
            "longitude": "19.4137211"
        },
        {
            "placeName": "RCKiK Rzeszow",
            "latitude": "50.0334889",
            "longitude": "22.0130973"
        },
        {
            "placeName": "RCKiK Kielce OT Sandomierz",
            "latitude": "50.7553383",
            "longitude": "20.9178641"
        },
        {
            "placeName": "RCKiK Rzeszow OT Sanok",
            "latitude": "49.5522192",
            "longitude": "22.199985"
        },
        {
            "placeName": "RCKiK Warszawa OT Siedlce",
            "latitude": "52.1976765",
            "longitude": "21.3880605"
        },
        {
            "placeName": "RCKiK Lodz Mobile Sieradz",
            "latitude": "51.5820268",
            "longitude": "18.7082217"
        },
        {
            "placeName": "RCKiK Kielce OT Skarzysko-Kamienna",
            "latitude": "51.1261577",
            "longitude": "20.8666262"
        },
        {
            "placeName": "RCKiK Lodz Mobile Skierniewice",
            "latitude": "51.9583848",
            "longitude": "20.1395537"
        },
        {
            "placeName": "RCKiK Slupsk",
            "latitude": "54.46976",
            "longitude": "17.0304172"
        },
        {
            "placeName": "RCKiK Katowice OT Sosnowiec",
            "latitude": "50.2881303",
            "longitude": "19.0565677"
        },
        {
            "placeName": "RCKiK Poznan OT Srem",
            "latitude": "52.08929",
            "longitude": "17.007114"
        },
        {
            "placeName": "RCKiK Rzeszow OT Stalowa Wola",
            "latitude": "50.5629912",
            "longitude": "22.0675332"
        },
        {
            "placeName": "RCKiK Kielce Mobile Starachowice",
            "latitude": "51.064462",
            "longitude": "21.0710655"
        },
        {
            "placeName": "RCKiK Szczecin Mobile Stargard Szczecinski",
            "latitude": "53.3400111",
            "longitude": "15.0348198"
        },
        {
            "placeName": "RCKiK Gdansk OT Starogard Gdanski",
            "latitude": "53.9677103",
            "longitude": "18.5060738"
        },
        {
            "placeName": "RCKiK Krakow OT Sucha Beskidzka",
            "latitude": "49.7365629",
            "longitude": "19.6050049"
        },
        {
            "placeName": "RCKiK Zielona Gora OT Sulecin",
            "latitude": "52.1909185",
            "longitude": "15.0697734"
        },
        {
            "placeName": "RCKiK Bialystok OT Suwalki",
            "latitude": "54.119514",
            "longitude": "22.9253912"
        },
        {
            "placeName": "RCKiK Bydgoszcz Mobile Swiecie",
            "latitude": "53.411462",
            "longitude": "18.4530203"
        },
        {
            "placeName": "RCKiK Szczecin OT Swinoujscie",
            "latitude": "53.6734748",
            "longitude": "14.1181102"
        },
        {
            "placeName": "RCKiK Poznan OT Szamotuly",
            "latitude": "52.6107816",
            "longitude": "16.5791524"
        },
        {
            "placeName": "RCKiK Szczecin",
            "latitude": "53.4366765",
            "longitude": "14.5344951"
        },
        {
            "placeName": "WCKiK MON Szczecin",
            "latitude": "53.4431097",
            "longitude": "14.5401499"
        },
        {
            "placeName": "RCKiK Rzeszow Mobile Tarnobrzeg",
            "latitude": "50.5708969",
            "longitude": "21.6635243"
        },
        {
            "placeName": "RCKiK Krakow OT Tarnow 1",
            "latitude": "50.056115",
            "longitude": "19.9540891"
        },
        {
            "placeName": "RCKiK Krakow OT Tarnow 2",
            "latitude": "50.0129702",
            "longitude": "21.0336387"
        },
        {
            "placeName": "RCKiK Katowice OT Tarnowskie Gory",
            "latitude": "50.3528143",
            "longitude": "18.8525866"
        },
        {
            "placeName": "RCKiK Gdansk OT Tczew",
            "latitude": "54.087699",
            "longitude": "18.78588"
        },
        {
            "placeName": "RCKiK Lublin OT Tomaszow Lubelski",
            "latitude": "50.4420539",
            "longitude": "23.415471"
        },
        {
            "placeName": "RCKiK Lodz Mobile Tomaszow Mazowiecki",
            "latitude": "51.5230413",
            "longitude": "20.0028299"
        },
        {
            "placeName": "RCKiK Bydgoszcz OT Torun",
            "latitude": "53.0181186",
            "longitude": "18.5777602"
        },
        {
            "placeName": "RCKiK Krakow OT Wadowice",
            "latitude": "49.8803373",
            "longitude": "19.4918248"
        },
        {
            "placeName": "RCKiK Poznan OT Wagrowiec",
            "latitude": "52.8178896",
            "longitude": "17.2026899"
        },
        {
            "placeName": "RCKiK Walbrzych",
            "latitude": "50.7741414",
            "longitude": "16.2727622"
        },
        {
            "placeName": "RCKiK Warszawa OT Warszawa 1",
            "latitude": "52.2870673",
            "longitude": "20.948657"
        },
        {
            "placeName": "RCKiK Warszawa OT Warszawa 2",
            "latitude": "52.226199",
            "longitude": "20.9987085"
        },
        {
            "placeName": "RCKiK Warszawa",
            "latitude": "52.2327098",
            "longitude": "21.0577082"
        },
        {
            "placeName": "WCKiK MON Warsaw",
            "latitude": "52.251046",
            "longitude": "21.0863523"
        },
        {
            "placeName": "WCKiK MSW Warsaw",
            "latitude": "52.1988993",
            "longitude": "20.9953322"
        },
        {
            "placeName": "RCKiK Gdansk OT Wejherowo",
            "latitude": "54.6051939",
            "longitude": "18.2549349"
        },
        {
            "placeName": "RCKiK Bydgoszcz Mobile Wiecbork",
            "latitude": "53.3512237",
            "longitude": "17.4864754"
        },
        {
            "placeName": "RCKiK Lodz Mobile Wielun",
            "latitude": "51.2285177",
            "longitude": "18.561783"
        },
        {
            "placeName": "RCKiK Bydgoszcz OT Wloclawek",
            "latitude": "52.6588794",
            "longitude": "19.056255"
        },
        {
            "placeName": "RCKiK Lublin OT Wlodawa",
            "latitude": "51.5582193",
            "longitude": "23.5512022"
        },
        {
            "placeName": "RCKiK Raciborz OT Wodzislaw Slaski",
            "latitude": "50.0153936",
            "longitude": "18.4581013"
        },
        {
            "placeName": "RCKiK Poznan OT Wolsztyn",
            "latitude": "52.1163103",
            "longitude": "16.1152272"
        },
        {
            "placeName": "RCKiK Wroclaw",
            "latitude": "51.1159722",
            "longitude": "17.0636376"
        },
        {
            "placeName": "WCKiK MON Wroclaw",
            "latitude": "51.0747829",
            "longitude": "17.0199318"
        },
        {
            "placeName": "RCKiK Poznan OT Wrzesnia",
            "latitude": "52.325057",
            "longitude": "17.5733741"
        },
        {
            "placeName": "RCKiK Katowice OT Zabrze",
            "latitude": "50.3070619",
            "longitude": "18.7814811"
        },
        {
            "placeName": "RCKiK Zielona Gora OT Zagan",
            "latitude": "51.6277486",
            "longitude": "15.2005223"
        },
        {
            "placeName": "RCKiK Krakow OT Zakopane",
            "latitude": "49.3045891",
            "longitude": "19.9614258"
        },
        {
            "placeName": "RCKiK Lublin OT Zamosc",
            "latitude": "50.7122198",
            "longitude": "23.287981"
        },
        {
            "placeName": "RCKiK Zielona Gora OT Zary",
            "latitude": "51.6429769",
            "longitude": "15.1381854"
        },
        {
            "placeName": "RCKiK Katowice Mobile Zawiercie",
            "latitude": "50.4910758",
            "longitude": "19.4305194"
        },
        {
            "placeName": "RCKiK Lodz Mobile Zdunska Wola",
            "latitude": "51.6042377",
            "longitude": "18.9403342"
        },
        {
            "placeName": "RCKiK Walbrzych Mobile Zgorzelec",
            "latitude": "51.1458853",
            "longitude": "15.0079179"
        },
        {
            "placeName": "RCKiK Zielona Gora",
            "latitude": "51.9405182",
            "longitude": "15.5167508"
        },
        {
            "placeName": "RCKiK Katowice Mobile Zywiec",
            "latitude": "49.68618",
            "longitude": "19.2048425"
        }
    ]

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
                        <MyMap data={data}/>
                    </div>
                    <ManyRadiobuttonsNoDefault name='mobileonly' labels={['Mobile points only']} values={['0']}
                                               ids={['mobileRadio']}/>
                </div>
                <div className='collection-tiles-container'>
                    <CollectionPointTile placeName='RCKiK Bialystok' address='ulica' city='Bialystok'/>
                    <CollectionPointTile placeName='RCKiK Bialystok' address='ulica' city='Bialystok' isMobile={true}/>
                    <CollectionPointTile placeName='RCKiK Bialystok' address='ulica' city='Bialystok' isMobile={true}/>
                    <CollectionPointTile placeName='RCKiK Bialystok' address='ulica' city='Bialystok' isMobile={true}/>
                    <CollectionPointTile placeName='RCKiK Bialystok' address='ulica' city='Bialystok' isMobile={true}/>
                </div>


            </div>

            <BottomBar/>
        </div>
    );


}


export default CollectionPoints;
