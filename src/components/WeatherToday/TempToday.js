import React from 'react';


export const TempToday = ( {data, handleClickSearch} ) => {

    const dateToday = new Date();

    return(
        <>
            <button className="search-place" onClick={ handleClickSearch }>Search for place</button>

            {
                data.weather && <div style={ { width:'100px', height:'100px', backgroundImage:`url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)` } }></div>
            }

    
            {
                <>
                    <h2> { data?.main?.temp} °c</h2>
            
                    <h2> { data.weather && data.weather[0].description}</h2> 
                </>
            }

            <h2> Today   { dateToday.toDateString() } </h2>
        
            <h2>  { data?.name } </h2>
            
        </>
    )
}