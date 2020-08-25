import {
  ADD_CHEESE,
  ADD_KETCHUP,
  ADD_MAYO,
  ADD_PICKLES,
  ADD_SALAD,
  ADD_TOMATOES,
  ADD_ONIONS,
  ADD_SPICY,
  ADD_BACON,
  ADD_MEAT,
} from './types'

export const addCheese = () => (dispatch) => {
  dispatch({
    type: ADD_CHEESE,
  })
}

export const addOnions = () => (dispatch) => {
  dispatch({
    type: ADD_ONIONS,
  })
}
export const addSalad = () => (dispatch) => {
  dispatch({
    type: ADD_SALAD,
  })
}
export const addTomatoes = () => (dispatch) => {
  dispatch({
    type: ADD_TOMATOES,
  })
}
export const addPickles = () => (dispatch) => {
  dispatch({
    type: ADD_PICKLES,
  })
}
export const addBacon = () => (dispatch) => {
  dispatch({
    type: ADD_BACON,
  })
}

export const addSpicy = () => (dispatch) => {
  dispatch({
    type: ADD_SPICY,
  })
}
export const addMayo = () => (dispatch) => {
  dispatch({
    type: ADD_MAYO,
  })
}
export const addKetchup = () => (dispatch) => {
  dispatch({
    type: ADD_KETCHUP,
  })
}

export const addMeat = () => (dispatch) => {
  dispatch({
    type: ADD_MEAT,
  })
}
