import { ADD_COLA, ADD_FANTA, ADD_PEPSI, ADD_BURGER } from './types'

export const addCola = () => (dispatch) => {
  dispatch({
    type: ADD_COLA,
  })
}

export const addFanta = () => (dispatch) => {
  dispatch({
    type: ADD_FANTA,
  })
}

export const addPepsi = () => (dispatch) => {
  dispatch({
    type: ADD_PEPSI,
  })
}

export const addBurger = () => (dispatch) => {
  dispatch({
    type: ADD_BURGER,
  })
}
