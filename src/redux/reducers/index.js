import { combineReducers } from "redux";
import accountReducer from './accountReducer'
import { usersReducer, userReducer } from './userReducer'

const reducers = combineReducers({
  account: accountReducer,
  users: usersReducer,
  user: userReducer
})

export default reducers