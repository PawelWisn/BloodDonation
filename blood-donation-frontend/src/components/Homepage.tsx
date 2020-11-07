import Paper from '@material-ui/core/Paper';
import UpperBar from './UpperBar';
import BottomBar from "./BottomBar";
import React from "react";
import Tile from "./Tile";
import Map from "../images/map.png"
import BlRes from "../images/blood_reserves.png"
import Quiz from "../images/quiz.png"
import Law from "../images/law.png"
import Person from "../images/person.png"
import School from "../images/school.png"
import RegDon from "../images/register_donation.png"
import Trophy from "../images/trophy.png"
import './Common.scss';
import './Homepage.scss';

function Homepage() {
    return (
        <div className="flex-wrapper">
            <UpperBar/>
            <div className='homepage-row'>
                <Tile subject="BLOOD RESERVES" alt="storage" picture={BlRes}/>
                <Tile subject="COLLECTION POINT" alt="map" picture={Map}/>
                <Tile subject="DONOR TEST" alt="quiz" picture={Quiz}/>
                <Tile subject="BENEFITS" alt="trophy" picture={Trophy}/>

            </div>
            <div className='homepage-row'>
                <Tile subject="KNOWLEDGE" alt="education" picture={School}/>
                <Tile subject="LEGAL REGULATIONS" alt="law" picture={Law}/>
                <Tile subject="REGISTER DONATION" alt="register" picture={RegDon}/>
                <Tile subject="MY PROFILE" alt="user" picture={Person}/>
            </div>

            <BottomBar/>
        </div>
    );

}


export default Homepage
