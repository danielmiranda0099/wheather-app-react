import React, { useEffect, useState } from 'react';

import { SearchPlace } from './SearchPlace';
import { TempToday } from './TempToday';

export const WeatherToday = ( {data, setData, isSearch, setPlace, handleClickSearch} ) => {


    return(
        <div className="wheather-today">
                {
                    isSearch 
                        ? <SearchPlace setPlace={setPlace} handleClickSearch={ handleClickSearch } /> 
                        : <>
                            <TempToday data={data} handleClickSearch={ handleClickSearch } />
                          </>
                }
        </div>
    )
}

