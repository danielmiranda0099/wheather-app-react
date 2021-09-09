import React from 'react';

export const TempToday = ( {data, handleClickSearch, isCelsius, buttonConvert } ) => {

    const dateToday = new Date();

    return(
        <>
            <button className="search-place" onClick={ handleClickSearch }>Search for place</button>

            <div className="" style={ { width:'100%', height:'40%', display: "flex", justifyContent: "center", alignItems:"center"} }>
            {
                data.weather && <div className="img-background margin-top-100" style={ { width:'200px', height:'150px', backgroundImage:`url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)` } }></div>
            }
            </div>
    
            {
                <div class="flex-row data-temp-padding">
                    {
                        isCelsius === "c" 
                            ? <><h2 className="data-temp"> { data?.main?.temp}  </h2>  <h2 className="data-symbol" >°c</h2> </>
                            : <><h2 className="data-temp"> { parseInt((data?.main?.temp * 9/5) + 32 ) }  </h2> <h2 className="data-symbol" >°f</h2> </>
                    }
                </div>
            }

            <h2 className=" margin-top-info"> { data.weather && data.weather[0].description}</h2> 

            <h2 className=" margin-top-info"> { dateToday.toDateString() } </h2>
        
            <div className="flex-row margin-top-info">
            <i class="fas fa-map-marker-alt" style={ {paddingRight:"8px"} }></i>
            <h2>  { data?.name } </h2>
            </div>

            <div class="button-convert-temp margin-top-info">
                <h2  className={ isCelsius ==='c' ? "button-convert-active" : "button-convert-deactive" } onClick={ buttonConvert }> °c </h2>
                <h2  className={ isCelsius ==='f' ? "button-convert-active" : "button-convert-deactive" } onClick={ buttonConvert }> °f </h2>
            </div>
            
        </>
    )
}