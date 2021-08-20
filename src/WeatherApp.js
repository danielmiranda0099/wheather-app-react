import React, { useEffect, useState } from 'react';
import { getApiGeolocalizacion } from './helpers/getApiGeolocalizacion';



export const WeatherApp = () => {

    

    const [city, setCity] = useState('');
    

    useEffect( () => {
        
        getApiGeolocalizacion()
        

        //console.log(data, 'data de app');
        console.log('final')

    }, [])
    
    

    
    
    

    return(
        <h1>{ city }</h1>
    )
}