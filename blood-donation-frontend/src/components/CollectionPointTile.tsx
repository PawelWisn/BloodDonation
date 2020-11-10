import './CollectionPointTile.scss'
import React from "react";
import Stationary from "../images/stationary.png"
import Mobile from "../images/mobile.png"

function CollectionPointTile(props: any) {
    const {placeName, address, city, isMobile = false} = props;

    return (
        <div className='collection-point-container'>
            <div>
                <img alt={isMobile ? 'Mobile' : "Stationary"} src={isMobile ? Mobile : Stationary}/>
            </div>
            <div className='collection-point-data'>
                <h3>{placeName}</h3>
                <p>{address}</p>
                <p>{city}</p>
            </div>
        </div>
    );

}

export default CollectionPointTile;
