import React from "react";
import './CollectionPoints.scss';
import UpperBar from "./UpperBar";
import ManyRadiobuttonsNoDefault from "./ManyRadiobuttonsNoDefault";
import BottomBar from "./BottomBar";
import CollectionPointTile from "./CollectionPointTile";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function CollectionPoints() {

    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Blood Collection Points</h1>
                <h2>Check on the map where you can donate</h2>
            </div>

            <div className='locals-container'>
                <div>
                    <div id='map'></div>
                    <ManyRadiobuttonsNoDefault name='mobileonly' labels={['Mobile points only']} values={['0']}
                                               ids={['mobileRadio']}/>
                </div>
                <div className='collection-tiles-container'>
                    <CollectionPointTile placeName='RCKiK Bialystok' address='ulica' city='Bialystok'/>
                    <CollectionPointTile placeName='RCKiK Bialystok' address='ulica' city='Bialystok' isMobile={true}/>
                    <CollectionPointTile placeName='RCKiK Bialystok' address='ulica' city='Bialystok' isMobile={true}/>
                    <CollectionPointTile placeName='RCKiK Bialystok' address='ulica' city='Bialystok' isMobile={true}/>
                    <CollectionPointTile placeName='RCKiK Bialystok' address='ulica' city='Bialystok' isMobile={true}/>
                </div>


            </div>

            <BottomBar/>
        </div>
    );


}


export default CollectionPoints;
