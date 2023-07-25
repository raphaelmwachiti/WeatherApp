export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeatherRequest = () => {
    return {
        type: FETCH_WEATHER_REQUEST,
    };
};

export const fetchWeatherSuccess = (weather) => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        payload: weather,
    };
};

export const fetchWeatherFailure = (error) => {
    return {
        type: FETCH_WEATHER_FAILURE,
        payload: error,
    };
};
