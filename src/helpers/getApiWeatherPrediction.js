

export const getApiWeatherPrediction = async (lat, lon) => {

    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=bb638100fe22978df4a409a78ace9614&units=metric`;

    const res = await fetch(URL);
    const json = await res.json();
    return json;
}