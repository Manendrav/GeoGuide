import React, { useEffect, useState } from 'react'
import conf from '../utils/conf';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function customQuery(location, search, locationId, routeCoordinates) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userLocationData, setUserLocationData] = useState({});           // user current location details
    const [nearbyLocationData, setNearbyLocationData] = useState([])        // what services present in the nearby location
    const [locationDetailes , setLocationDetailes] = useState({});          // location details of the user clicked location
    const [routeData, setRouteData] = useState({});                         // route details from one location to another location

    const controller = new AbortController();
    const apikey = conf.placesKey;

    console.log(location);                                                  // for testing kolkata coordinates: {latitude: 22.54111111, longitude: 88.33777778}
    console.log(search);                                                    // for testing search: 'restaurant'
    console.log(locationId);
    console.log(routeCoordinates);

    const {lat: routeLatitude, lon: routeLongitude} = routeCoordinates || {};
    console.log(routeLatitude, routeLongitude);

    const fromWaypoint = [22.54111111,88.33777778];                // latutude, longitude          // use location longitude and latitude
    const toWaypoint = [routeLatitude,routeLongitude];                  // latitude, longitude          // fetch from the api

    console.log(`From: ${fromWaypoint.join(',')} To: ${toWaypoint.join(',')}`)

 
    // Fetch services around the locations
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { latitude, longitude } = location || {};
                console.log(latitude, longitude);

                //* It gives the user current location details
                if (location !== null && location !== undefined) {
                    const response = await axios.get(` https://api.geoapify.com/v2/place-details?lat=${22.54111111}&lon=${88.33777778}&features=details,building&apiKey=7e93e16d60254f4fa3a0e976ea174a4d`)
                    console.log(response.data.features[0].properties);
                    setUserLocationData(response.data.features[0].properties);
                    console.log("Response come 1")
                }

                //* It gives the user current nearby location details
                if (search !== null && search !== undefined) {
                    const response = await axios.get(`https://api.geoapify.com/v2/places?categories=${search}&filter=circle:${88.33777778},${22.54111111},5000&bias=proximity:${88.33777778},${22.54111111}&limit=20&apiKey=${apikey}`);
                    console.log(response.data.features);
                    setNearbyLocationData(response.data.features);
                    console.log("Response come 2")
                }

                //* It gives the location details of the user clicked location
                if (locationId !== null && locationId !== undefined) {
                    const response = await axios.get(`https://api.geoapify.com/v2/place-details?id=${locationId}&features=details&apiKey=${apikey}`);
                    console.log(response.data.features[0].properties);
                    setLocationDetailes(response.data.features[0].properties);
                    console.log("Response come 3")
                }

                //* It gives the route details from one location to another location
                if(routeCoordinates !== null && routeCoordinates !== undefined){
                    const response = await axios.get(`https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint.join(',')}|${toWaypoint.join(',')}&mode=drive&details=instruction_details&apiKey=${apikey}`)
                    console.log(response.data);
                    setRouteData(response.data);
                    console.log("Response come 4")
                }
            }
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => {
            controller.abort();                                               // it is used to cleanup the controller
        };
    }, [location, search, locationId, routeCoordinates]);

    return [userLocationData, nearbyLocationData, locationDetailes, routeData, error];
}


