import { ActionTypes } from "../constants/action-types";


const reducer = (state = 0, { type, payload }) => {
  switch (type) {
    case ActionTypes.DEPOSIT_MONEY:
      return state + payload;
    case ActionTypes.WIDRAW_MONEY:
      return state - payload;
    default: 
    return state;
  }
}

export default reducer