import React from 'react';


export const CardPrediction = ( {min, max, icon} ) => {

    return(
        <div className="predic-card">
            <div style={ { width:'100%', height:'40%', backgroundImage:`url(https://openweathermap.org/img/wn/${icon}@2x.png)`, backgroundRepeat: 'no-repeat'} }></div>
            <div className="predict-card-min-max">
                <h3> {min} </h3>
                <h3> {max} </h3>
            </div>
        </div>
    )
}