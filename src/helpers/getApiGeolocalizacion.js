//import { getFetchWeather } from "./getWeatherCurrentLatLon";


export const getApiGeolocalizacion = ( ) => {
    
    return new Promise( (resolve, reject) => {
        if( !navigator.geolocation ) return
        let lat, lon;

        const sucess = (position) => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            
            resolve ( {lat, lon} )
        }        

        navigator.geolocation.getCurrentPosition( sucess, (err) => resolve( {lat:40.6643, lon:-73.9385} ) )
        } )
    
}

