import { GET_ITEMS, NEW_ITEM } from './types';
import $ from 'jquery';

export const getItems = () => dispatch => {
  console.log('getItems invoked!');
  $.get('/fetch', (expirationDates) => {
    console.log(expirationDates);
    dispatch({
      type: GET_ITEMS,
      payload: expirationDates
    })
  });
}