import React, { useEffect, useState } from 'react';

import { MoreInfoWeather } from './components/moreInfoWeather/MoreInfoWeather';
import { WeatherToday } from './components/WeatherToday/WeatherToday';
import { getApiGeolocalizacion } from './helpers/getApiGeolocalizacion';
import { getFetchWeather } from './helpers/getWeatherCurrentLatLon';
import { getApiWeatherPrediction} from './helpers/getApiWeatherPrediction';

import './normalize.css';
import './weatherapp.css';
import { getApiWheatherBycity } from './helpers/getApiWheatherBycity';


export const WeatherApp = () => {

    const [data, setData] = useState( [] );
    const [dataPredict, setDataPredict] = useState( [] );

    const [isSearch, setIsSearch] = useState(false);
    const [place, setPlace] = useState('');


    useEffect( () => {
        const funcGetLatLon = async () => {
            const {lat, lon} = await getApiGeolocalizacion();
            const jsonData = await getFetchWeather(lat, lon);
            setData( jsonData ) 

            const jsonPredict = await getApiWeatherPrediction(lat, lon);
            setDataPredict( jsonPredict );

        }
        funcGetLatLon();
    }, [])

    useEffect( () => {
        // !place
        if(place.length > 1){
            const funcGetLatLon = async () => {
                const jsonData = await getApiWheatherBycity(place);
                setData( jsonData );

                let {lat,lon} = jsonData.coord;
                console.log(lat, lon);
                const jsonPredict = await getApiWeatherPrediction(lat, lon);
                setDataPredict( jsonPredict );
            }

            funcGetLatLon();
        }
    }, [place] )

    const handleClickSearch = () => {
        setIsSearch( !isSearch );
    }


    return(
        <div className="container-app">
        
            <WeatherToday data={ data } setData={ setData } isSearch={ isSearch } setPlace={ setPlace } handleClickSearch={handleClickSearch}/>

            
            <MoreInfoWeather data={ data } dataPredict={ dataPredict } />
            
        </div>
    )
}