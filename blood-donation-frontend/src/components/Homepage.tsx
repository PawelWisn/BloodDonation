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
import {useHistory} from "react-router-dom";


function Homepage() {

    const history = useHistory();

    function tileOnclick(url: string) {
        history.push(url);
    }

    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='homepage-row'>
                <div className='homepage-element'>
                    <Tile subject="BLOOD RESERVES" alt="storage" picture={BlRes} onClick={()=>tileOnclick('/reserves')}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="COLLECTION POINT" alt="map" picture={Map} onClick={()=>tileOnclick('/localizations')}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="DONOR TEST" alt="quiz" picture={Quiz} onClick={()=>tileOnclick('/quiz')}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="BENEFITS" alt="trophy" picture={Trophy} onClick={()=>tileOnclick('/benefits')}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="KNOWLEDGE" alt="education" picture={School} onClick={()=>tileOnclick('/knowledge')}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="LEGAL REGULATIONS" alt="law" picture={Law} onClick={()=>tileOnclick('/regulations')}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="REGISTER DONATION" alt="register" picture={RegDon} onClick={()=>tileOnclick('/declaredonation')}/>
                </div>
                <div className='homepage-element'>
                    <Tile subject="MY PROFILE" alt="user" picture={Person} onClick={()=>tileOnclick('/profile')}/>
                </div>
            </div>

            <BottomBar/>
        </div>
    );

}


function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default Homepage
