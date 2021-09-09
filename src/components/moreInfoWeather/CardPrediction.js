import React from 'react';


export const CardPrediction = ( {min, max, icon, isCelsius} ) => {

    return(
        <div className="predic-card">
            <div className="img-background" style={ { width:'120px', height:'80px', backgroundImage:`url(https://openweathermap.org/img/wn/${icon}@2x.png)`, backgroundRepeat: 'no-repeat'} }></div>
            <div className="predict-card-min-max">
               
                {
                    isCelsius === "c"
                        ?  <h3> { parseInt( min ) } °C </h3>
                        :  <h3> { parseInt( (min * 9/5) + 32 ) } °F</h3>
                }

                {
                    isCelsius === "c"
                        ?  <h3> { parseInt( max ) } °C </h3>
                        :  <h3> { parseInt( (max * 9/5) + 32 ) } °F</h3>
                }
            </div>
        </div>
    )
}