import './Common.scss';
import './MyProfile.scss'
import React from "react";
import UpperBar from "./UpperBar";
import BottomBar from "./BottomBar";


let data = [
    {
        "donationID": "53",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "RCKIK ZIELONA GORA OT ZIELONA GORA"
        },
        "amount": 450,
        "time": "2020-11-13T01:17:49.967027"
    },
    {
        "donationID": "52",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "RCKIK ZIELONA GORA OT ZIELONA GORA"
        },
        "amount": 450,
        "time": "2020-11-13T01:17:49.810121"
    },
    {
        "donationID": "51",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "RCKIK ZIELONA GORA OT ZIELONA GORA"
        },
        "amount": 450,
        "time": "2020-11-13T01:17:49.658805"
    },
    {
        "donationID": "50",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "RCKIK ZIELONA GORA OT ZIELONA GORA"
        },
        "amount": 450,
        "time": "2020-11-13T01:17:49.496107"
    },
    {
        "donationID": "49",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "RCKIK ZIELONA GORA OT ZIELONA GORA"
        },
        "amount": 450,
        "time": "2020-11-13T01:17:49.339356"
    },
    {
        "donationID": "48",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "RCKIK ZIELONA GORA OT ZIELONA GORA"
        },
        "amount": 450,
        "time": "2020-11-13T01:17:49.176155"
    },
    {
        "donationID": "47",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "RCKIK ZIELONA GORA OT ZIELONA GORA"
        },
        "amount": 450,
        "time": "2020-11-13T01:17:49.009459"
    },
    {
        "donationID": "46",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "RCKIK ZIELONA GORA OT ZIELONA GORA"
        },
        "amount": 450,
        "time": "2020-11-13T01:17:48.847176"
    },
    {
        "donationID": "45",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "RCKIK ZIELONA GORA OT ZIELONA GORA"
        },
        "amount": 450,
        "time": "2020-11-13T01:17:48.674033"
    },
    {
        "donationID": "44",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "RCKIK ZIELONA GORA OT ZIELONA GORA"
        },
        "amount": 450,
        "time": "2020-11-13T01:17:48.505670"
    },
    {
        "donationID": "43",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "RCKIK ZIELONA GORA OT ZIELONA GORA"
        },
        "amount": 450,
        "time": "2020-11-13T01:17:48.337070"
    },
    {
        "donationID": "42",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "RCKIK ZIELONA GORA OT ZIELONA GORA"
        },
        "amount": 450,
        "time": "2020-11-13T01:17:47.900769"
    },
    {
        "donationID": "41",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:03.017449"
    },
    {
        "donationID": "40",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:02.895341"
    },
    {
        "donationID": "39",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:02.698382"
    },
    {
        "donationID": "38",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:02.566480"
    },
    {
        "donationID": "37",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:02.380095"
    },
    {
        "donationID": "36",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:02.241395"
    },
    {
        "donationID": "35",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:02.067194"
    },
    {
        "donationID": "34",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:01.967652"
    },
    {
        "donationID": "33",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:01.738540"
    },
    {
        "donationID": "32",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:01.623506"
    },
    {
        "donationID": "31",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:01.456778"
    },
    {
        "donationID": "30",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:01.264789"
    },
    {
        "donationID": "29",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:01.076762"
    },
    {
        "donationID": "28",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:00.906831"
    },
    {
        "donationID": "27",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:00.635491"
    },
    {
        "donationID": "26",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:55:00.513935"
    },
    {
        "donationID": "25",
        "donationType": "PLT",
        "place": {
            "city": "Wroclaw",
            "placeName": "Emi"
        },
        "amount": 450,
        "time": "2020-11-12T21:54:59.981112"
    }
];

function buildRow(rowIdx: number, columns: any) {
    return (
        <tr key={columns[5]}>
            <td>{rowIdx}</td>
            <td>{columns[0]}</td>
            <td>{columns[1]}</td>
            <td>{columns[2]}</td>
            <td>{columns[3]}</td>
            <td>{columns[4]}</td>
        </tr>
    );
}

function createTableContent(data: any) {
    let typeConverter: any = {
        'BLD': "Blood",
        "PLT": "Platelets",
        "PLM": "Plasma",
        "ERT": "Erythrocytes",
        "LEU": "Leukocytes"
    };
    let content: any = [];
    for (let i = 0; i < data.length; ++i) {
        const date = data[i]['time'].split('T')[0];
        const comp = typeConverter[data[i]['donationType']];
        const amount = data[i]['amount'] + ' ml';
        const city = data[i]['place']['city'];
        const place = data[i]['place']['placeName'];
        const key = data[i]['donationID'];
        content.push(buildRow(data.length - i, [date, comp, amount, city, place, key]));
    }
    return content;
}

function MyProfile() {

    return (
        <div className="main-page-content">
            <UpperBar/>

            <div className="my-profile-container">
                <div>
                    <h5>YOUR CURRENT TITLE</h5>
                </div>
                <div>
                    <h1 id='title-header' className='standout'>HONORARY DONOR</h1>
                </div>
                <div>
                    <h5>ALREADY DONATED THE EQUIVALENCE OF</h5>
                </div>
                <div>
                    <h2 id='equivalence-header' className='standout'>15535 ml</h2>
                </div>
                <div>
                    <h5>OF BLOOD</h5>
                </div>

                <div id="progress-outer">
                    <div id='progress-text'>50% TO PROMOTION</div>
                    <div id='progress-inner'/>
                </div>

                <div>
                    <table id='profile-stats'>
                        <thead>
                        <tr id='profile-stats-header-row'>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>COMPONENT</th>
                            <th>AMOUNT</th>
                            <th>CITY</th>
                            <th>COLLECTION POINT</th>
                        </tr>

                        </thead>
                        <tbody>
                        {createTableContent(data)}
                        </tbody>
                    </table>
                </div>
            </div>


            <BottomBar/>
        </div>
    );
}


export default MyProfile;
