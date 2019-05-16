// @flow

import { Drinks } from '../constants/actionTypes';
import {  } from '../services/drinks';

export const fetchDrinks = () => ({
  type: Drinks.FETCH
})

export const fetchDrinksSuccess = (response: Object) => ({
  type: Drinks.FETCH_SUCCESS,
  payload: response
})

export const fetchDrinksFail = (response: Object) => ({
  type: Drinks.FETCH_FAIL,
  payload: response
})
