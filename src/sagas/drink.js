// @flow

import { all, takeLatest, put, call } from 'redux-saga/effects';

import { getDrinks } from '../services/drinks';
import { fetchDrinks, fetchDrinksSuccess, fetchDrinksFail } from '../actions/drinks';
import { Drinks } from '../constants/actionTypes';

export function* drinkList() {
    try {
      const response = yield call(getDrinks);
      yield put(fetchDrinksSuccess(response));
    } catch(e) {
      console.log(e);
      yield put(fetchDrinksFail('error fetching drinks data'));
    }
  }

export default function* top() {
  yield all([
    takeLatest(Drinks.FETCH, drinkList),
  ]);
}
