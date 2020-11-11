import './Common.scss';
import './RegisterDonation.scss';
import UpperBar from "./UpperBar";
import React from "react";
import BottomBar from "./BottomBar";

function RegisterDonation() {
    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Donor Test</h1>
                <h2>Answer to questions and precheck if you are allowed to donate</h2>
            </div>

            <div className='quiz-container'>
            </div>


            <BottomBar/>
        </div>
    );
}

export default RegisterDonation;
