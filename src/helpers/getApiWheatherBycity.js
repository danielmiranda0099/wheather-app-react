
export const getApiWheatherBycity = async ( city ) => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb638100fe22978df4a409a78ace9614&units=metric`;
    const response = await fetch(URL)
    const json = await response.json();
    return json;
}