import React from 'react';
import { MoreInfoToday } from './MoreInfoToday';
import { WeatherPrediction } from './WeatherPrediction';

export const MoreInfoWeather = ( {data, dataPredict} ) => {

    

    return(
        <div className="more-info-content">
            
            <WeatherPrediction dataPredict={dataPredict}/>

            <h2>Today's Hightlights</h2>

            <MoreInfoToday data={ data } />
        </div>
    )
}