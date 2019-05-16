// @flow

import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Thumbnail, Text } from 'native-base';
import { type DrinkItem } from '../records/Drink';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    height: 120,
    width: 350,
    marginBottom: 15,
    borderRadius: 4,
  },
  thumbnail: {
    left: 12,
    top: 36,
  },
  drinkLabel: {
    fontSize: 25,
    left: 95,
    bottom: 10,
  }
});

export default ({drink}: Object) => {
  return (
    <View key={drink.idDrink} style={styles.item}>
      <Thumbnail style={styles.thumbnail} source={{uri: drink.strDrinkThumb}} />
      <Text style={styles.drinkLabel}>{drink.strDrink}</Text>
    </View>
  )
}
