import React from 'react'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import './LocationMap.css'
import { useMemo } from 'react';
import { GoogleMap,useLoadScript, Marker } from '@react-google-maps/api';
function LocationMap() {
    const{ isLoaded } = useLoadScript({
        googleMapsApiKey : process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if(!isLoaded) return (
    <div className="locationMap__title">
            <p>Find the Nearest Nursery Near You</p> 
            <div className="locationMap__icon"><AddLocationAltIcon/></div> 
            <div>Loading...</div>
        </div>
    
    )
    return (
    <div className='locationMap'>
        <div className="locationMap__title">
            <p>Find the Nearest Nursery Near You</p> 
            <div className="locationMap__icon"><AddLocationAltIcon/></div> 
        </div>
        <Map/>
    </div>
  )
}
function Map(){
    const center = useMemo(()=>({lat:44 ,lng:-88 }),[]); 
    return <GoogleMap 
    zoom={5} 
    center={{lat:44 ,lng:-88 }} 
    mapContainerClassName="map-Container">
    <Marker position={center}/>
    </GoogleMap>
}

export default LocationMap
