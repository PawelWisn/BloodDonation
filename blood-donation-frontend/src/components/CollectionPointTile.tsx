import '../styles/CollectionPointTile.scss'
import React from "react";
import Stationary from "../images/stationary.png"
import Mobile from "../images/mobile.png"

type CollectionPointTileType = {
    placeName: string,
    address: string,
    city: string,
    isMobile: boolean
}

function CollectionPointTile(props: CollectionPointTileType) {
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
