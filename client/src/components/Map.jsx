
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import marker from '../../public/loc.svg';
import { Icon } from 'leaflet'

const Map = () => {

    const myIcon = new Icon({
        iconUrl: marker,
        iconSize: [32,42]
       })

    return (
        <MapContainer
            key={[22.54111111, 88.33777778]}                         // Here why i use two time? -> MapContainer component doesn't automatically re-render when its center prop changes.
            center={[22.54111111, 88.33777778]}                      // To ensure that the map re-renders when the center prop changes, we have to use the key prop to force a re-render.
            zoom={13}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution=''
            />
            <Marker position={[22.54111111, 88.33777778]} icon={myIcon}></Marker>
        </MapContainer>
    );
};

export default Map;
