import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Loading from './src/Components/Loading';
import * as Location from 'expo-location';
import * as secret from './secret';
import axios from 'axios';
import Weather from './src/Components/Weather';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState('');

  const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
  const API_KEY = secret.KEY;

  const getWeather = async (lat, lon) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(BASE_URL, {
      params: {
        lat, lon,
        appid: API_KEY,
        units: 'metric' // 섭씨로 설정
      }
    });

    setTemp(Math.round(temp));
    setCondition(weather[0].main);
    setIsLoading(false);
  }

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      await getWeather(latitude, longitude);
    }
    catch (e) {
      Alert.alert('Can\'t find you', 'So sad :(');
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
      isLoading ? <Loading/> : <Weather temp={temp} condition={condition}/>
  );
}