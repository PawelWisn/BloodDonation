import './Common.scss';
import './MyProfile.scss'
import React, {useEffect, useState} from "react";
import UpperBar from "./UpperBar";
import BottomBar from "./BottomBar";
import {useQuery} from "urql";
import {useHistory} from "react-router-dom";

const UserQuery = `
  query {
    donationWithUser {
        donationID
        donationType
        place{
              city
              placeName
            }      
        donor{
              isMale
        }
        amount
        time       
        donationType
    }
  }
`;

function calculateBloodEquivalence(request: any) {
    const donations = request['data']['donationWithUser'];
    let equivalenceOfBlood = 0;
    for (let donation of donations) {
        let dType = donation['donationType'];
        let amount = donation['amount'];
        if (dType === 'BLD') equivalenceOfBlood += amount;
        else if (dType === 'PLM') equivalenceOfBlood += 200;
        else if (dType === 'PLT' && amount <= 500) equivalenceOfBlood += 500;
        else if (dType === 'PLT') equivalenceOfBlood += 1000;
        else if (dType === 'ERT' && amount < 300) equivalenceOfBlood += 500;
        else if (dType === 'ERT') equivalenceOfBlood += 1000;
        else if (dType === 'LEU') equivalenceOfBlood += 2000;
    }
    return '' + equivalenceOfBlood;
}


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
    const history = useHistory();
    const [userData] = useQuery({'query': UserQuery, 'requestPolicy': 'cache-and-network'});
    if (userData.fetching) return (
        <div className="main-page-content">
            <UpperBar redirectHomeOnLogout={true}/>
            <div className='subpage-title'>
                <h1>Loading ...</h1>
            </div>
            <BottomBar/>
        </div>
    )
    else if (userData.error) return (
        <div className="main-page-content">
            <UpperBar redirectHomeOnLogout={true}/>
            <div className='subpage-title'>
                <h1>You do not have permission to perform this action</h1>
                <h2>Please <span id='error-login-link' onClick={() => {
                    history.push('/login')
                }}>login</span> and try again</h2>
            </div>
            <BottomBar/>
        </div>
    )


    return (
        <div className="main-page-content">
            <UpperBar redirectHomeOnLogout={true}/>

            <div className="my-profile-container">
                <div>
                    <h5>YOUR CURRENT TITLE</h5>
                </div>
                <div>
                    <h1 id='title-header' className='standout'>{getUserTitle(userData)}</h1>
                </div>
                <div>
                    <h5>ALREADY DONATED THE EQUIVALENCE OF</h5>
                </div>
                <div>
                    <h2 id='equivalence-header'
                        className='standout'>{calculateBloodEquivalence(userData)} ml</h2>
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
                        {createTableContent(userData['data']['donationWithUser'])}
                        </tbody>
                    </table>
                </div>
            </div>


            <BottomBar/>
        </div>
    );

    function getUserTitle(request: any) {
        const data = request['data']['donationWithUser']
        const eqiv = parseInt(calculateBloodEquivalence(request))
        if (eqiv >= 20000) return 'dla naradou';
        if (data && data.length>0) {
            if (data[0]['donor']['isMale']) {
                if (eqiv >= 18000) return 'MERITORIOUS HONORARY BLOOD DONOR, 1 Degree';
                if (eqiv >= 12000) return 'MERITORIOUS HONORARY BLOOD DONOR, 2 Degree';
                if (eqiv >= 6000) return 'MERITORIOUS HONORARY BLOOD DONOR, 3 Degree';
            }
            if (eqiv >= 15000) return 'MERITORIOUS HONORARY BLOOD DONOR, 1 Degree';
            if (eqiv >= 10000) return 'MERITORIOUS HONORARY BLOOD DONOR, 2 Degree';
            if (eqiv >= 5000) return 'MERITORIOUS HONORARY BLOOD DONOR, 3 Degree';
        }
        return 'HONORARY BLOOD DONOR';
    }
}


export default MyProfile;
