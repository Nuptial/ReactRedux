import axios from 'axios';

const API_KEY = 'e712fe6a1c7a81820b737c1c93cf5ee5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},us`; // Complete request url
    const request = axios.get(url);

   // console.log('Request:',request);


    return {
        type: FETCH_WEATHER,
        payload: request
    };



}