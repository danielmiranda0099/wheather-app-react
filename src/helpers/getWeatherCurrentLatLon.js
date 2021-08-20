
export const getFetchWeather = async ( lat, lon ) => {


    console.log(lat, lon, 'lo que sea');
    lat = !lat? 40.6643 : lat;
    lon = !lon? -73.9385 : lon;

    let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb638100fe22978df4a409a78ace9614`;
    const response = await fetch(URL)
    const json = await response.json();
    return json;
}


