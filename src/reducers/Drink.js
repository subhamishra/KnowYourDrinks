// @flow

import { Drinks } from '../constants/actionTypes';
import { type DrinkList } from '../records/Drink';

const initialState: DrinkList = {
  drinks: []
}

export default (state: DrinkList = initialState, action: any) => {
  switch(action.type) {
    case Drinks.FETCH_SUCCESS:
      return { ...state, drinks: action.payload.drinks }
    default:
      return state
  }
}
