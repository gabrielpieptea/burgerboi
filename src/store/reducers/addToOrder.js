import { ADD_COLA, ADD_FANTA, ADD_PEPSI } from '../actions/types'

const initialState = {
  ordered: '',
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_COLA:
      return {
        ...state,
        ordered: 'Cola',
      }
    case ADD_FANTA:
      return {
        ...state,
        ordered: 'Fanta',
      }
    case ADD_PEPSI:
      return {
        ...state,
        ordered: 'Pepsi',
      }
    default:
      return state
  }
}
