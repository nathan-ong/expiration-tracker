import { GET_ITEMS, NEW_ITEM, TOGGLE_REMINDER } from '../actions/types';

const initialState = {
  items: [],
  item: {
    itemName: "",
    expMonth: Date().slice(4, 7),
    expDay: new Date().getDate(),
    expYear: new Date().getFullYear(),
    reminderNum: 'N/A',
    reminderUnit: 'N/A',
    setReminder: false
  },
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    case NEW_ITEM:
      const newItem = {
        ...state.item,
        ...action.payload
      }
      return {
        ...state,
        item: newItem
      }
    case TOGGLE_REMINDER:
      state.item.setReminder = action.payload;
      if (action.payload) {
        state.item.reminderNum = 1;
        state.item.reminderUnit = 'day(s)';
      } else {
        state.item.reminderNum = 'N/A';
        state.item.reminderUnit = 'N/A';
      }
      return {
        ...state,
      }
    default:
      return state;
  }
} 