/// <reference types="googlemaps" />
import React, {Component, useEffect, useRef, useState} from "react";
import {loadMapApi} from "./loadMapApi";
// import {} from "googlemaps";
import { GoogleMap, LoadScript } from '@react-google-maps/api';



const center = {lat: 52.0688104, lng: 19.4622349};

// function MyMap(props:any){
//     let map: google.maps.Map;
//     const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
//
//     function initMap(): void {
//         map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//             center,
//             zoom: 8
//         });
//     }
//
// }




const containerStyle = {
    width: '400px',
    height: '400px'
};


function MyMap() {
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDXKIPpaK7QeV9wCJcCwE20z9940fxCjcI"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyMap)
