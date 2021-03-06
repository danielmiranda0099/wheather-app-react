import React from 'react';


export const MoreInfoToday = ( {data} ) => {

    return(
        <div className="more-info-content-item">
            <div className="more-info-item">
                <h2>Wind status</h2>
                <h2> {data?.wind?.speed} mph</h2>
            </div>

            <div className="more-info-item">
                <h2>Humidity</h2>
                <h2> {data?.main?.humidity} % </h2>
                <input id="myinput" type="range" min="0" max="100" value={ data?.main?.humidity }  style={ { background:'linear-gradient(to right, #FFEC65 0%, #FFEC65 ' + data?.main?.humidity + '%, #fff ' + data?.main?.humidity + '%, white 100%)' } }/>
            </div>

            <div className="more-info-item">
                <h2>visibility</h2>
                <h2> { data?.visibility } </h2>
            </div>

            <div className="more-info-item">
                <h2>Air Pressure</h2>
                <h2> { data?.main?.pressure } </h2>
            </div>
        </div>
    )
}