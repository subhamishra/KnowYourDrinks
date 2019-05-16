// @flow

import { DRINKS } from '../constants/apiEndpoints'

export const getDrinks = async () => {
  try {
    const response = await fetch(DRINKS);
    const json = await response.json();

    return json;
  } catch(e) {
    console.log(e);
  }
}
