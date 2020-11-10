import React from "react";
import './CollectionPoints.scss';
import UpperBar from "./UpperBar";
import ManyRadiobuttonsNoDefault from "./ManyRadiobuttonsNoDefault";
import PopupButton from "./PopupButton";
import BottomBar from "./BottomBar";


function CollectionPoints() {

    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Blood Collection Points</h1>
                <h2>Check on the map where you can donate</h2>
            </div>

            <div className='locals-container'>

                <div id='map'></div>

                <ManyRadiobuttonsNoDefault name='mobileonly' labels={['Mobile points only']} values={['0']}
                                           ids={['mobileRadio']}/>


            </div>

            <BottomBar/>
        </div>
    );


}


export default CollectionPoints;
