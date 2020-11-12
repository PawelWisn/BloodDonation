import './Common.scss';
import './MyProfile.scss'
import React from "react";
import UpperBar from "./UpperBar";
import BottomBar from "./BottomBar";


function MyProfile(){

    return(
        <div className="main-page-content">
            <UpperBar/>

            <div className="my-profile-container">
            </div>

            <BottomBar/>
        </div>
    );
}


export default MyProfile;
