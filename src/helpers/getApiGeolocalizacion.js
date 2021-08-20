//import { getFetchWeather } from "./getWeatherCurrentLatLon";


export const getApiGeolocalizacion = async ( ) => {
    if( !navigator.geolocation ) return
    
    let lat, lon;
        
    const sucess = (position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        
        console.log(lat, lon, 'sucess')
        //return {lat, lon};
    }        



    const funcion = async () => {

        const promesa = () => new Promise( (resolve, reject) => navigator.geolocation.getCurrentPosition( sucess, (err) => console.log(err) ) )

        const resul = await promesa();
        console.log('haaaaaaaaaaaa')
        return resul; 
    }

    funcion().then( re => console.log(re, 'promesa') )

    

    console.log('no sali');
}
