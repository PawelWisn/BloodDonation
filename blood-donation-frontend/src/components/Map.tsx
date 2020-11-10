import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import Pointer from '../images/pointer.png';

const pointer = L.icon({
    iconUrl:Pointer,
    iconSize: [25,40],
    iconAnchor:[0,0],
    popupAnchor:[0,-40]
})

function MyMap(props: any) {
    return (
        <MapContainer className='mymap' center={[52.0688104, 19.4622349]} zoom={6} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[0,0]} icon={pointer}>
                <Popup>
                    HELLO THERE
                </Popup>
            </Marker>
        </MapContainer>
    );
}


export default MyMap;
