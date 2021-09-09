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

    const [isCelsius, setIsCelcius] = useState('c');


    useEffect( () => {
        const funcGetLatLon = async () => {
            const {lat, lon} = await getApiGeolocalizacion();
            const jsonData = await getFetchWeather(lat, lon);
            jsonData.main.temp = parseInt( jsonData.main.temp );
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
                jsonData.main.temp = parseInt( jsonData.main.temp );
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

    const buttonConvert = () => {
        isCelsius === "c" ? setIsCelcius("f") : setIsCelcius("c");
    }


    return(
        <div className="container-app">
        
            <WeatherToday data={ data } setData={ setData } isSearch={ isSearch } setPlace={ setPlace } handleClickSearch={handleClickSearch} isCelsius={ isCelsius }  buttonConvert={ buttonConvert  } />

            
            <MoreInfoWeather data={ data } dataPredict={ dataPredict } isCelsius={ isCelsius }/>
            
        </div>
    )
}