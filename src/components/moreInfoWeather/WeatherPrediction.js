import React from 'react';
import { CardPrediction } from './CardPrediction';


export const WeatherPrediction = ( {dataPredict} ) => {


    return(
        <div className="predicton-container">

        {
            dataPredict?.daily?.map( (el, index) => index < 5 && <CardPrediction key={index} min={el.temp.min} max={el.temp.max} icon={el.weather[0].icon} /> )
        }
        </div>
    )
}