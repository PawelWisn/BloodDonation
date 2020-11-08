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
        <div className="main-page-content">
            <UpperBar/>
            <div className='homepage-row'>
                <div className='homepage-element'>
                    <Tile subject="BLOOD RESERVES" alt="storage" picture={BlRes}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="COLLECTION POINT" alt="map" picture={Map}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="DONOR TEST" alt="quiz" picture={Quiz}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="BENEFITS" alt="trophy" picture={Trophy}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="KNOWLEDGE" alt="education" picture={School}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="LEGAL REGULATIONS" alt="law" picture={Law}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="REGISTER DONATION" alt="register" picture={RegDon}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="MY PROFILE" alt="user" picture={Person}/>
                </div>
            </div>

            <BottomBar/>
        </div>
    );

}


export default Homepage
