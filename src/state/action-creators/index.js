export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount
    })
  }
}

export const widrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "widraw",
      payload: amount
    })
  }
}