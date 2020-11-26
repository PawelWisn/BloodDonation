import React, {useState} from "react";
import '../styles/CollectionPoints.scss';
import UpperBar from "../components/UpperBar";
import ManyRadiobuttonsNoDefault from "../components/ManyRadiobuttonsNoDefault";
import BottomBar from "../components/BottomBar";
import CollectionPointTile from "../components/CollectionPointTile";
import MyMap from "../components/Map";
import "leaflet/dist/leaflet.css";
import {useQuery} from "urql";

const LocalizationsQuery = `
  query {
    allLocalizations {
        city    
        placeName
        address
        isMobilePoint
        latitude
        longitude
    }
  }
`;

function CollectionPoints() {
    const [displayMobileOnly, setDisplayMobileOnly] = useState(false);
    const [localizationsData] = useQuery({'query': LocalizationsQuery,'requestPolicy':'cache-and-network'});
    if (localizationsData.fetching) return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Loading ...</h1>
            </div>
            <BottomBar/>
        </div>
    )
    if (localizationsData.error) return (
        <div className="main-page-content">
            <UpperBar/>
            <div>
                <h1>Error! Please try again</h1>
            </div>
            <BottomBar/>
        </div>
    )

    function generateLocalTiles(data: any) {
        let localTiles = []
        for (let i = 0; i < data.length; ++i) {
            let isMobile = data[i]['isMobilePoint'];
            if (!isMobile && displayMobileOnly) {
                continue;
            }
            let placeName = data[i]['placeName'];
            let address = data[i]['address'];
            let city = data[i]['city'];
            localTiles.push(
                <CollectionPointTile key={placeName + 'Tile'} placeName={placeName} address={address} city={city}
                                     isMobile={isMobile}/>
            );
        }
        return localTiles;
    }

    function swapDisplayMobileOnly() {
        setDisplayMobileOnly((state) => !state);
    }

    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Blood Collection Points</h1>
                <h2>Check on the map where you can donate</h2>
            </div>

            <div className='locals-container'>
                <div>
                    <div id='mapID'>
                        <MyMap data={localizationsData['data']['allLocalizations']} filter={displayMobileOnly}/>
                    </div>
                    <div id='col-filter-button' onClick={swapDisplayMobileOnly}>{
                        <ManyRadiobuttonsNoDefault name='mobileonly' labels={['Mobile points only']} values={['0']}
                                                   ids={['mobileRadio']}/>
                    }
                    </div>
                </div>
                <div className='collection-tiles-container'>
                    {generateLocalTiles(localizationsData['data']['allLocalizations'])}
                </div>


            </div>

            <BottomBar/>
        </div>
    );


}


export default CollectionPoints;
