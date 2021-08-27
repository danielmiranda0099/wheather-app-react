import { useState } from "react";


export const SearchPlace = ( {setPlace, handleClickSearch} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(inputValue);
        handleClickSearch();
    }

    const handleOnchange = (e) => {
        setInputValue(e.target.value);
    }

    return(
        <>
            <form className="form-search-place" onSubmit={handleSubmit}>
                <input onChange={ handleOnchange } value={ inputValue } type="text" />
            </form>

            <button className="search-place-close" onClick={ handleClickSearch }>X</button>
            <h2>Search Place</h2>
        </>
    )
}