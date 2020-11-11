import './Common.scss';
import './RegisterDonation.scss';
import UpperBar from "./UpperBar";
import React from "react";
import BottomBar from "./BottomBar";

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
    }]

function RegisterDonation() {
    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Register Donation</h1>
                <h2>Add your donation to your account</h2>
            </div>

            <div className='reg-don-container'>
                <div>
                    <h4>Choose your donation point from the list</h4>
                </div>

                <select id="drop-down-points">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="vw">VW</option>
                    <option value="audi" selected>Audi</option>
                </select>
                <div className='left-aligned-div'>
                    <input type="text" id="filter-city" name="filter-city" placeholder="Filter by city"/>
                </div>
            </div>


            <BottomBar/>
        </div>
    );
}

export default RegisterDonation;
