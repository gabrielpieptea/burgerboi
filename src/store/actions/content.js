import { CONTENT_VALUE, ADD_VALUE, REMOVE_VALUE } from './types'

export const contentValue = () => (dispatch) => {
  dispatch({
    type: CONTENT_VALUE,
  })
}
export const ADD_VALUE = () => (dispatch) => {
  dispatch({
    type: ADD_VALUE,
  })
}

export const REMOVE_VALUE = () => (dispatch) => {
  dispatch({
    type: REMOVE_VALUE,
  })
}
