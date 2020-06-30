import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import * as secret from './secret';
import axios from 'axios';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
  const API_KEY = secret.KEY;

  const getWeather = async (lat, lon) => {
    const { data } = await axios.get(BASE_URL, {
      params: {
        lat, lon, appid: API_KEY
      }
    });
    console.log(data);
  }

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      await getWeather(latitude, longitude);
      setIsLoading(false);
    }
    catch (e) {
      Alert.alert('Can\'t find you', 'So sad :(');
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
      isLoading ? <Loading/> : null
  );
}