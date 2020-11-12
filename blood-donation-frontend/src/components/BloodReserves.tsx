import './Common.scss';
import './BloodReserves.scss';
import React from "react";
import PropTypes from 'prop-types';
import UpperBar from "./UpperBar";
import BottomBar from "./BottomBar";
import Zero from '../images/0.png';
import Quarter from '../images/1.png';
import Half from '../images/2.png';
import ThreeQ from '../images/3.png';
import Full from '../images/4.png';


let data = [
    {
        "region": "Bialystok",
        "volume": 4,
        "group": "AB_N"
    },
    {
        "region": "Bialystok",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Bialystok",
        "volume": 0,
        "group": "A_N"
    },
    {
        "region": "Bialystok",
        "volume": 0,
        "group": "A_P"
    },
    {
        "region": "Bialystok",
        "volume": 2,
        "group": "B_N"
    },
    {
        "region": "Bialystok",
        "volume": 4,
        "group": "B_P"
    },
    {
        "region": "Bialystok",
        "volume": 0,
        "group": "Z_N"
    },
    {
        "region": "Bialystok",
        "volume": 0,
        "group": "Z_P"
    },
    {
        "region": "Bydgoszcz",
        "volume": 2,
        "group": "AB_N"
    },
    {
        "region": "Bydgoszcz",
        "volume": 3,
        "group": "AB_P"
    },
    {
        "region": "Bydgoszcz",
        "volume": 0,
        "group": "A_N"
    },
    {
        "region": "Bydgoszcz",
        "volume": 0,
        "group": "A_P"
    },
    {
        "region": "Bydgoszcz",
        "volume": 0,
        "group": "B_N"
    },
    {
        "region": "Bydgoszcz",
        "volume": 2,
        "group": "B_P"
    },
    {
        "region": "Bydgoszcz",
        "volume": 0,
        "group": "Z_N"
    },
    {
        "region": "Bydgoszcz",
        "volume": 2,
        "group": "Z_P"
    },
    {
        "region": "Gdansk",
        "volume": 2,
        "group": "AB_N"
    },
    {
        "region": "Gdansk",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Gdansk",
        "volume": 3,
        "group": "A_N"
    },
    {
        "region": "Gdansk",
        "volume": 3,
        "group": "A_P"
    },
    {
        "region": "Gdansk",
        "volume": 1,
        "group": "B_N"
    },
    {
        "region": "Gdansk",
        "volume": 2,
        "group": "B_P"
    },
    {
        "region": "Gdansk",
        "volume": 2,
        "group": "Z_N"
    },
    {
        "region": "Gdansk",
        "volume": 2,
        "group": "Z_P"
    },
    {
        "region": "Kalisz",
        "volume": 1,
        "group": "AB_N"
    },
    {
        "region": "Kalisz",
        "volume": 2,
        "group": "AB_P"
    },
    {
        "region": "Kalisz",
        "volume": 1,
        "group": "A_N"
    },
    {
        "region": "Kalisz",
        "volume": 1,
        "group": "A_P"
    },
    {
        "region": "Kalisz",
        "volume": 1,
        "group": "B_N"
    },
    {
        "region": "Kalisz",
        "volume": 2,
        "group": "B_P"
    },
    {
        "region": "Kalisz",
        "volume": 2,
        "group": "Z_N"
    },
    {
        "region": "Kalisz",
        "volume": 3,
        "group": "Z_P"
    },
    {
        "region": "Katowice",
        "volume": 3,
        "group": "AB_N"
    },
    {
        "region": "Katowice",
        "volume": 3,
        "group": "AB_P"
    },
    {
        "region": "Katowice",
        "volume": 1,
        "group": "A_N"
    },
    {
        "region": "Katowice",
        "volume": 1,
        "group": "A_P"
    },
    {
        "region": "Katowice",
        "volume": 4,
        "group": "B_N"
    },
    {
        "region": "Katowice",
        "volume": 3,
        "group": "B_P"
    },
    {
        "region": "Katowice",
        "volume": 1,
        "group": "Z_N"
    },
    {
        "region": "Katowice",
        "volume": 3,
        "group": "Z_P"
    },
    {
        "region": "Kielce",
        "volume": 4,
        "group": "AB_N"
    },
    {
        "region": "Kielce",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Kielce",
        "volume": 1,
        "group": "A_N"
    },
    {
        "region": "Kielce",
        "volume": 1,
        "group": "A_P"
    },
    {
        "region": "Kielce",
        "volume": 1,
        "group": "B_N"
    },
    {
        "region": "Kielce",
        "volume": 1,
        "group": "B_P"
    },
    {
        "region": "Kielce",
        "volume": 1,
        "group": "Z_N"
    },
    {
        "region": "Kielce",
        "volume": 1,
        "group": "Z_P"
    },
    {
        "region": "Krakow",
        "volume": 2,
        "group": "AB_N"
    },
    {
        "region": "Krakow",
        "volume": 3,
        "group": "AB_P"
    },
    {
        "region": "Krakow",
        "volume": 2,
        "group": "A_N"
    },
    {
        "region": "Krakow",
        "volume": 2,
        "group": "A_P"
    },
    {
        "region": "Krakow",
        "volume": 2,
        "group": "B_N"
    },
    {
        "region": "Krakow",
        "volume": 2,
        "group": "B_P"
    },
    {
        "region": "Krakow",
        "volume": 1,
        "group": "Z_N"
    },
    {
        "region": "Krakow",
        "volume": 4,
        "group": "Z_P"
    },
    {
        "region": "Lodz",
        "volume": 3,
        "group": "AB_N"
    },
    {
        "region": "Lodz",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Lodz",
        "volume": 3,
        "group": "A_N"
    },
    {
        "region": "Lodz",
        "volume": 2,
        "group": "A_P"
    },
    {
        "region": "Lodz",
        "volume": 2,
        "group": "B_N"
    },
    {
        "region": "Lodz",
        "volume": 4,
        "group": "B_P"
    },
    {
        "region": "Lodz",
        "volume": 2,
        "group": "Z_N"
    },
    {
        "region": "Lodz",
        "volume": 3,
        "group": "Z_P"
    },
    {
        "region": "Lublin",
        "volume": 0,
        "group": "AB_N"
    },
    {
        "region": "Lublin",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Lublin",
        "volume": 0,
        "group": "A_N"
    },
    {
        "region": "Lublin",
        "volume": 0,
        "group": "A_P"
    },
    {
        "region": "Lublin",
        "volume": 0,
        "group": "B_N"
    },
    {
        "region": "Lublin",
        "volume": 2,
        "group": "B_P"
    },
    {
        "region": "Lublin",
        "volume": 0,
        "group": "Z_N"
    },
    {
        "region": "Lublin",
        "volume": 0,
        "group": "Z_P"
    },
    {
        "region": "Olsztyn",
        "volume": 4,
        "group": "AB_N"
    },
    {
        "region": "Olsztyn",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Olsztyn",
        "volume": 4,
        "group": "A_N"
    },
    {
        "region": "Olsztyn",
        "volume": 2,
        "group": "A_P"
    },
    {
        "region": "Olsztyn",
        "volume": 4,
        "group": "B_N"
    },
    {
        "region": "Olsztyn",
        "volume": 4,
        "group": "B_P"
    },
    {
        "region": "Olsztyn",
        "volume": 2,
        "group": "Z_N"
    },
    {
        "region": "Olsztyn",
        "volume": 4,
        "group": "Z_P"
    },
    {
        "region": "Opole",
        "volume": 1,
        "group": "AB_N"
    },
    {
        "region": "Opole",
        "volume": 1,
        "group": "AB_P"
    },
    {
        "region": "Opole",
        "volume": 1,
        "group": "A_N"
    },
    {
        "region": "Opole",
        "volume": 1,
        "group": "A_P"
    },
    {
        "region": "Opole",
        "volume": 1,
        "group": "B_N"
    },
    {
        "region": "Opole",
        "volume": 1,
        "group": "B_P"
    },
    {
        "region": "Opole",
        "volume": 1,
        "group": "Z_N"
    },
    {
        "region": "Opole",
        "volume": 1,
        "group": "Z_P"
    },
    {
        "region": "Poznan",
        "volume": 4,
        "group": "AB_N"
    },
    {
        "region": "Poznan",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Poznan",
        "volume": 1,
        "group": "A_N"
    },
    {
        "region": "Poznan",
        "volume": 1,
        "group": "A_P"
    },
    {
        "region": "Poznan",
        "volume": 0,
        "group": "B_N"
    },
    {
        "region": "Poznan",
        "volume": 4,
        "group": "B_P"
    },
    {
        "region": "Poznan",
        "volume": 0,
        "group": "Z_N"
    },
    {
        "region": "Poznan",
        "volume": 1,
        "group": "Z_P"
    },
    {
        "region": "Raciborz",
        "volume": 1,
        "group": "AB_N"
    },
    {
        "region": "Raciborz",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Raciborz",
        "volume": 2,
        "group": "A_N"
    },
    {
        "region": "Raciborz",
        "volume": 1,
        "group": "A_P"
    },
    {
        "region": "Raciborz",
        "volume": 1,
        "group": "B_N"
    },
    {
        "region": "Raciborz",
        "volume": 2,
        "group": "B_P"
    },
    {
        "region": "Raciborz",
        "volume": 1,
        "group": "Z_N"
    },
    {
        "region": "Raciborz",
        "volume": 4,
        "group": "Z_P"
    },
    {
        "region": "Radom",
        "volume": 1,
        "group": "AB_N"
    },
    {
        "region": "Radom",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Radom",
        "volume": 1,
        "group": "A_N"
    },
    {
        "region": "Radom",
        "volume": 0,
        "group": "A_P"
    },
    {
        "region": "Radom",
        "volume": 0,
        "group": "B_N"
    },
    {
        "region": "Radom",
        "volume": 2,
        "group": "B_P"
    },
    {
        "region": "Radom",
        "volume": 1,
        "group": "Z_N"
    },
    {
        "region": "Radom",
        "volume": 2,
        "group": "Z_P"
    },
    {
        "region": "Rzeszow",
        "volume": 1,
        "group": "AB_N"
    },
    {
        "region": "Rzeszow",
        "volume": 3,
        "group": "AB_P"
    },
    {
        "region": "Rzeszow",
        "volume": 1,
        "group": "A_N"
    },
    {
        "region": "Rzeszow",
        "volume": 0,
        "group": "A_P"
    },
    {
        "region": "Rzeszow",
        "volume": 0,
        "group": "B_N"
    },
    {
        "region": "Rzeszow",
        "volume": 3,
        "group": "B_P"
    },
    {
        "region": "Rzeszow",
        "volume": 0,
        "group": "Z_N"
    },
    {
        "region": "Rzeszow",
        "volume": 1,
        "group": "Z_P"
    },
    {
        "region": "Slupsk",
        "volume": 4,
        "group": "AB_N"
    },
    {
        "region": "Slupsk",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Slupsk",
        "volume": 4,
        "group": "A_N"
    },
    {
        "region": "Slupsk",
        "volume": 2,
        "group": "A_P"
    },
    {
        "region": "Slupsk",
        "volume": 4,
        "group": "B_N"
    },
    {
        "region": "Slupsk",
        "volume": 4,
        "group": "B_P"
    },
    {
        "region": "Slupsk",
        "volume": 2,
        "group": "Z_N"
    },
    {
        "region": "Slupsk",
        "volume": 2,
        "group": "Z_P"
    },
    {
        "region": "Szczecin",
        "volume": 0,
        "group": "AB_N"
    },
    {
        "region": "Szczecin",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Szczecin",
        "volume": 1,
        "group": "A_N"
    },
    {
        "region": "Szczecin",
        "volume": 0,
        "group": "A_P"
    },
    {
        "region": "Szczecin",
        "volume": 1,
        "group": "B_N"
    },
    {
        "region": "Szczecin",
        "volume": 1,
        "group": "B_P"
    },
    {
        "region": "Szczecin",
        "volume": 0,
        "group": "Z_N"
    },
    {
        "region": "Szczecin",
        "volume": 1,
        "group": "Z_P"
    },
    {
        "region": "Walbrzych",
        "volume": 1,
        "group": "AB_N"
    },
    {
        "region": "Walbrzych",
        "volume": 1,
        "group": "AB_P"
    },
    {
        "region": "Walbrzych",
        "volume": 0,
        "group": "A_N"
    },
    {
        "region": "Walbrzych",
        "volume": 0,
        "group": "A_P"
    },
    {
        "region": "Walbrzych",
        "volume": 0,
        "group": "B_N"
    },
    {
        "region": "Walbrzych",
        "volume": 1,
        "group": "B_P"
    },
    {
        "region": "Walbrzych",
        "volume": 0,
        "group": "Z_N"
    },
    {
        "region": "Walbrzych",
        "volume": 0,
        "group": "Z_P"
    },
    {
        "region": "Warszawa",
        "volume": 2,
        "group": "AB_N"
    },
    {
        "region": "Warszawa",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Warszawa",
        "volume": 1,
        "group": "A_N"
    },
    {
        "region": "Warszawa",
        "volume": 1,
        "group": "A_P"
    },
    {
        "region": "Warszawa",
        "volume": 1,
        "group": "B_N"
    },
    {
        "region": "Warszawa",
        "volume": 1,
        "group": "B_P"
    },
    {
        "region": "Warszawa",
        "volume": 1,
        "group": "Z_N"
    },
    {
        "region": "Warszawa",
        "volume": 2,
        "group": "Z_P"
    },
    {
        "region": "Wroclaw",
        "volume": 4,
        "group": "AB_N"
    },
    {
        "region": "Wroclaw",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Wroclaw",
        "volume": 4,
        "group": "A_N"
    },
    {
        "region": "Wroclaw",
        "volume": 4,
        "group": "A_P"
    },
    {
        "region": "Wroclaw",
        "volume": 0,
        "group": "B_N"
    },
    {
        "region": "Wroclaw",
        "volume": 1,
        "group": "B_P"
    },
    {
        "region": "Wroclaw",
        "volume": 0,
        "group": "Z_N"
    },
    {
        "region": "Wroclaw",
        "volume": 4,
        "group": "Z_P"
    },
    {
        "region": "Zielona Gora",
        "volume": 2,
        "group": "AB_N"
    },
    {
        "region": "Zielona Gora",
        "volume": 4,
        "group": "AB_P"
    },
    {
        "region": "Zielona Gora",
        "volume": 2,
        "group": "A_N"
    },
    {
        "region": "Zielona Gora",
        "volume": 1,
        "group": "A_P"
    },
    {
        "region": "Zielona Gora",
        "volume": 2,
        "group": "B_N"
    },
    {
        "region": "Zielona Gora",
        "volume": 2,
        "group": "B_P"
    },
    {
        "region": "Zielona Gora",
        "volume": 2,
        "group": "Z_N"
    },
    {
        "region": "Zielona Gora",
        "volume": 2,
        "group": "Z_P"
    }
]

function getProperPicture(num: number) {
    if (num === 0) {
        return Zero
    }
    if (num === 1) {
        return Quarter
    }
    if (num === 2) {
        return Half
    }
    if (num === 3) {
        return ThreeQ
    }
    if (num === 4) {
        return Full
    }
}

function buildRow(row: any) {
    const mapping = [row[7][2], row[6][2], row[3][2], row[2][2], row[5][2], row[4][2], row[1][2], row[0][2]];
    let trContent = [<td>{row[0][1]}</td>,]
    for (let i = 0; i < 8; ++i) {
        trContent.push(
            <td><img alt={getProperPicture(mapping[i])} src={getProperPicture(mapping[i])}/></td>
        )
    }

    return (
        <tr>
            {trContent}
        </tr>
    );
}

function createTableContent(data: any) {
    const iterations = data.length / 8;
    let content:any = [];
    for (let i = 0; i < iterations; ++i) {
        let row = []
        for (let j = 0; j < 8; ++j) {
            let off = i * 8 + j;
            const region = data[off]['region'];
            const volume = parseInt(data[off]['volume']);
            const group = data[off]['group'].replace('_', ' ');
            row.push([group, region, volume]);
        }
        content.push(
            buildRow(row)
        );
    }
    return content;
}

function BloodReserves() {

    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Blood Group Reserves</h1>
                <h2>Check what is the current storage level of each blood group</h2>
            </div>

            <div className='blood-reserves-container'>
                <table>
                    <thead>
                    <tr className="table-sticky-header">
                        <th>City</th>
                        <th>0 Rh-</th>
                        <th>0 Rh+</th>
                        <th>A Rh-</th>
                        <th>A Rh+</th>
                        <th>B Rh-</th>
                        <th>B Rh+</th>
                        <th>AB Rh-</th>
                        <th>AB Rh+</th>
                    </tr>
                    </thead>
                    <tbody>
                    {createTableContent(data)}

                    </tbody>
                </table>
            </div>

            <BottomBar/>
        </div>
    );
}


export default BloodReserves;
