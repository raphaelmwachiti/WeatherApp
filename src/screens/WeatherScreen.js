import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Location from 'expo-location';

import { fetchWeather } from '../services/weatherService';

const WeatherScreen = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector((state) => state.weather);
    const { loading, weather, error } = weatherData;

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            dispatch(fetchWeatherFailure('Permission to access location was denied'));
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        dispatch(fetchWeather(latitude, longitude));
    };

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Loading...</Text>
            ) : error ? (
                <Text>Error: {error}</Text>
            ) : (
                <View>
                    <Text>Temperature: {weather.main.temp}</Text>
                    <Text>Humidity: {weather.main.humidity}</Text>
                    <Text>Conditions: {weather.weather[0].main}</Text>
                    <Text>Description: {weather.weather[0].description}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default WeatherScreen;
