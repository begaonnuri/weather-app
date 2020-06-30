import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { CONDITIONS, WEATHER_OPTIONS } from '../constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({ temp, condition }) {
  return (
      <LinearGradient colors={WEATHER_OPTIONS[condition].gradient}
                      style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons name={WEATHER_OPTIONS[condition].iconName}
                                  size={100}
                                  color="white"/>
          <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
          <Text style={styles.title}>{WEATHER_OPTIONS[condition].title}</Text>
          <Text style={styles.subtitle}>{WEATHER_OPTIONS[condition].subtitle}</Text>
        </View>
      </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(CONDITIONS).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temp: {
    fontSize: 40,
    color: 'white'
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: '300',
    marginBottom: 10,
    textAlign: 'left'
  },
  subtitle: {
    fontWeight: '600',
    color: 'white',
    fontSize: 20,
    textAlign: 'left'
  },
  textContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 40,
    justifyContent: 'center',
    flex: 1
  }
})