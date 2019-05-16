/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import SoftDrinkList from './components/DrinkList';
import { Provider } from 'react-redux';
import store from './config/store';

export default () => (
  <Provider store={ store }>
    <SoftDrinkList />
  </Provider>
)
