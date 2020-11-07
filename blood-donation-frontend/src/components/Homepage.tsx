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

function Homepage() {
    return (
        <div className="flex-wrapper">
            <UpperBar/>
                <Tile subject="ELO" alt="elo" picture={Map}/>
                <Tile subject="ELO" alt="elo" picture={BlRes}/>
                <Tile subject="ELO" alt="elo" picture={Quiz}/>
                <Tile subject="ELO" alt="elo" picture={Law}/>
                <Tile subject="ELO" alt="elo" picture={Person}/>
                <Tile subject="ELO" alt="elo" picture={School}/>
                <Tile subject="ELO" alt="elo" picture={RegDon}/>
                <Tile subject="ELO" alt="elo" picture={Trophy}/>
            <BottomBar/>
        </div>
    );

}


export default Homepage
