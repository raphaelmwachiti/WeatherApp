import axios from 'axios';
import { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure } from '../redux/actions/weatherActions';

const API_KEY = 'YOUR_API_KEY'; // replace with your API key
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = (lat, lon) => {
    return (dispatch) => {
        dispatch(fetchWeatherRequest());
        axios
            .get(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
            .then((response) => {
                // response.data is the weather data
                dispatch(fetchWeatherSuccess(response.data));
            })
            .catch((error) => {
                // error.message is the error description
                dispatch(fetchWeatherFailure(error.message));
            });
    };
};
