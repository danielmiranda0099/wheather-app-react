import React from 'react';
import { MoreInfoToday } from './MoreInfoToday';
import { WeatherPrediction } from './WeatherPrediction';

export const MoreInfoWeather = ( {data, dataPredict, isCelsius} ) => {

    

    return(
        <div className="more-info-content">
            
            <WeatherPrediction dataPredict={dataPredict} isCelsius={ isCelsius }/>

            <h2>Today's Hightlights</h2>

            <MoreInfoToday data={ data } />
        </div>
    )
}