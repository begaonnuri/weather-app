import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
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