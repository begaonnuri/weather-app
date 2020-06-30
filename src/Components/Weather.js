import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { CONDITIONS } from '../constants';

export default function Weather({ temp, condition }) {
  return (
      <View style={styles.container}>
        <Text>{temp}{condition}</Text>
      </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(CONDITIONS).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})