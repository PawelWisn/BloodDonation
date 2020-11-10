import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import Pointer from '../images/pointer.png';

const pointer = L.icon({
    iconUrl:Pointer,
    iconSize: [25,40],
    iconAnchor:[0,30],
    popupAnchor:[15,-30]
})

function MyMap(props: any) {
console.log(props);
    function markPoints(props:any){
        let markers = []
        for (let i = 0; i < props['data'].length; ++i) {
            let isMobile=props['data'][i]['isMobilePoint'];
            if (!isMobile && props['filter']){
                continue;
            }
            let placeName=props['data'][i]['placeName'];
            let lat=props['data'][i]['latitude'];
            let lng=props['data'][i]['longitude'];

            markers.push(
                <Marker key={placeName+'marker'} position={[parseFloat(lat),parseFloat(lng)]} icon={pointer}>
                    <Popup>{placeName}</Popup>
                </Marker>
            );
        }
        return markers;
    }


    return (
        <MapContainer className='mymap' center={[52.0688104, 19.4622349]} zoom={6} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markPoints(props)}
        </MapContainer>
    );
}


export default MyMap;
