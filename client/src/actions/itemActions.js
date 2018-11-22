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

export const createItem = (event) => dispatch => {
  const itemData = {[event.target.name]: event.target.value}
  dispatch({
    type: NEW_ITEM,
    payload: itemData
  })
}