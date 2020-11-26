import '../styles/Common.scss';
import '../styles/BloodReserves.scss';
import React from "react";
import UpperBar from "../components/UpperBar";
import BottomBar from "../components/BottomBar";
import Zero from '../images/0.png';
import Quarter from '../images/1.png';
import Half from '../images/2.png';
import ThreeQ from '../images/3.png';
import Full from '../images/4.png';
import {useQuery} from 'urql';


const BloodReservesQuery = `
  query {
    allReserves {
      region
      volume
      group
    }
  }
`;


function getProperPicture(num: number) {
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
    return Zero
}

function buildRow(row: any) {
    const mapping = [row[6][2], row[7][2], row[2][2], row[3][2], row[4][2], row[5][2], row[0][2], row[1][2]];
    console.log([row[6][0], row[7][0], row[2][0], row[3][0], row[4][0], row[5][0], row[0][0], row[1][0]]);
    let trContent = [<td key={row[0][1] + 'region'}>{row[0][1]}</td>,]
    for (let i = 0; i < 8; ++i) {
        trContent.push(
            <td key={row[0][1] + 'col' + i}>
                <img alt={getProperPicture(mapping[i])} src={getProperPicture(mapping[i])}/>
            </td>
        )
    }

    return (
        <tr key={row[0][1] + 'res'}>
            {trContent}
        </tr>
    );
}

function createTableContent(data: any) {
    const iterations = data.length / 8;
    let content: any = [];
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
    const [reservesData] = useQuery({'query': BloodReservesQuery,'requestPolicy':'cache-and-network'});
    if (reservesData.fetching) return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Loading ...</h1>
            </div>
            <BottomBar/>
        </div>
    )
    if (reservesData.error) return (
        <div className="main-page-content">
            <UpperBar/>
            <div>
                <h1>Error! Please try again</h1>
            </div>
            <BottomBar/>
        </div>
    )

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
                    <tr key='st-head' className="table-sticky-header">
                        <th key='st-h-reg'>Region</th>
                        <th key='st-h-0-'>0 Rh-</th>
                        <th key='st-h-0+'>0 Rh+</th>
                        <th key='st-h-a-'>A Rh-</th>
                        <th key='st-h-a+'>A Rh+</th>
                        <th key='st-h-b-'>B Rh-</th>
                        <th key='st-h-b+'>B Rh+</th>
                        <th key='st-h-ab-'>AB Rh-</th>
                        <th key='st-h-ab+'>AB Rh+</th>
                    </tr>
                    </thead>
                    <tbody>
                    {createTableContent(reservesData['data']['allReserves'])}

                    </tbody>
                </table>
            </div>

            <BottomBar/>
        </div>
    );
}


export default BloodReserves;
