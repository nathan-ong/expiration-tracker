import { GET_ITEMS, NEW_ITEM } from '../actions/types';

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
    console.log('inside of itemReducer GET_ITEMS case');
      return {
        ...state,
        items: action.payload
      }
    // case NEW_ITEM:
    //   return {
    //     ...state,
    //     item: action.payload
    //   }
    default:
      return state;
  }
} 