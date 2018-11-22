import { GET_ITEMS, NEW_ITEM, TOGGLE_REMINDER } from './types';
import $ from 'jquery';

export const getItems = () => dispatch => {
  $.get('/fetch', (expirationDates) => {
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

export const toggleReminder = (boolean) => dispatch => {
  dispatch({
    type: TOGGLE_REMINDER,
    payload: boolean
  })
}