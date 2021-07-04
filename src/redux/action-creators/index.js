import { ActionTypes } from "../constants/action-types"

export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.DEPOSIT_MONEY,
      payload: amount
    })
  }
}

export const widrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.WIDRAW_MONEY,
      payload: amount
    })
  }
}

export const setUsers = (users) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_USERS,
      payload: users
    })
  }
}

export const setUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SELECTED_USER,
      payload: user
    })
  }
}

export const removeSelectedUser = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.REMOVE_SELECTED_USER,
    })
  }
}