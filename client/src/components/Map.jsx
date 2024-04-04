
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import serviceMarker from '../../public/loc.svg';
import myMarker from '../../public/myLoc.png';
import routeMark from '../../public/routemark.png';
import { Icon, map } from 'leaflet'
import LocationDetailes from './LocationDetailes';
import L from 'leaflet';

const Map = ({ nearbyLocationData, location, routeData, handleLocationID }) => {

    // Render legs
    const renderLegs = () => {
        const features = [];
        routeData.features.forEach(feature => {
            feature.properties.legs.forEach(leg => {
                leg.steps.forEach(step => {
                    const pointFeature = {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": feature.geometry.coordinates[0][step.from_index]
                        },
                        "properties": {
                            "instruction": step.instruction.text
                        }
                    };
                    features.push(pointFeature);
                });
            });
        });
        return { "type": "FeatureCollection", "features": features };
    };

    const serviceLoc = new Icon({
        iconUrl: serviceMarker,
        iconSize: [32, 42]
    })

    const myIcon = new Icon({
        iconUrl: myMarker,
        iconSize: [42, 42]
    });

    const routeIcon = new Icon({
        iconUrl: routeMark,
        iconSize: [42, 42]
    });

    const turnByTurnMarkerStyle = {
        radius: 8,
        fillColor: "white",
        color: "red",
        weight: 0,
        opacity: 1,
        fillOpacity: 1
    };



    if (!location) {
        return null; // Render nothing if location is not available
    }

    const { latitude, longitude } = location || {};

    return (
        <MapContainer
            key={[22.54111111, 88.33777778]}                         // Here why i use two time? -> MapContainer component doesn't automatically re-render when its center prop changes.
            center={[22.54111111, 88.33777778]}                      // To ensure that the map re-renders when the center prop changes, we have to use the key prop to force a re-render.
            zoom={16}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution=''
            />
            {
                Array.isArray(nearbyLocationData) && nearbyLocationData.map((locationData, index) => (
                    <Marker key={index} position={[locationData.geometry.coordinates[1], locationData.geometry.coordinates[0]]} icon={serviceLoc}>
                        <Popup>
                            <LocationDetailes locationData={locationData} handleLocationID={handleLocationID} />
                        </Popup>
                    </Marker>
                ))

            }
            <Marker position={[22.54111111, 88.33777778]} icon={myIcon}></Marker>
            {
                Object.keys(routeData).length > 0 && (
                    <GeoJSON
                        key={JSON.stringify(routeData)}

                        data={{
                            "type": "FeatureCollection",
                            "features": [
                                ...routeData.features,              // Route line features
                                ...renderLegs().features            // Additional points generated by renderLegs
                            ]
                        }}

                        style={() => ({
                            color: "#404be8",
                            weight: 7
                        })}
                        pointToLayer={(feature, latlng) => {
                            return L.circleMarker(latlng, turnByTurnMarkerStyle);
                        }}
                        onEachFeature={(feature, layer) => {
                            layer.bindPopup(`${feature.properties.instruction}`);
                        }}
                    />
                )
            }
            {
                Object.keys(routeData).length > 0 && (
                    Array.isArray(routeData.properties.waypoints) && routeData.properties.waypoints.map((waypoint, index) => (
                        <Marker key={index} position={[waypoint.lat, waypoint.lon]} icon={routeIcon} />
                    ))
                )
            }
        </MapContainer>
    );
};

export default Map;
