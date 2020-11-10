import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, LatLngTuple } from "leaflet";
import 'leaflet/dist/leaflet.css';


const containerStyle = {
    width: '1200px',
    height: '600px'
};


function MyMap(){
        return (
            <MapContainer className='mymap' center={[52.0688104, 19.4622349]} zoom={6} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        );
    }


export default MyMap;
