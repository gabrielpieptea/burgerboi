import { CONTENT_VALUE, ADD_VALUE, REMOVE_VALUE } from '../actions/types'

const initialState = {}

export default function (state = initialState, action) {
  const { type, value } = action

  switch (type) {
    case ADD_VALUE:
      return { ...state, state: state + value }
    case REMOVE_VALUE:
      return { ...state, state: state - value }
  }
}
