import {
  ADD_CHEESE,
  ADD_KETCHUP,
  ADD_MAYO,
  ADD_ONIONS,
  ADD_PICKLES,
  ADD_SALAD,
  ADD_BACON,
  ADD_TOMATOES,
  ADD_SPICY,
  ADD_MEAT,
} from '../actions/types'

const initialState = {
  tomatoes: 0,
  pickles: 0,
  cheese: 0,
  salad: 0,
  bacon: 0,
  onions: 0,
  mayo: 0,
  spicy: 0,
  ketchup: 0,
  meat: 0,
}

export default function (state = initialState, action) {
  const { type } = action

  switch (type) {
    case ADD_CHEESE:
      return {
        ...state,
        cheese: state.cheese + 1,
      }
    case ADD_KETCHUP:
      return {
        ...state,
        ketchup: state.ketchup + 1,
      }
    case ADD_MAYO:
      return {
        ...state,
        mayo: state.mayo + 1,
      }
    case ADD_ONIONS:
      return {
        ...state,
        onions: state.onions + 1,
      }
    case ADD_PICKLES:
      return {
        ...state,
        pickles: state.pickles + 1,
      }
    case ADD_SALAD:
      return {
        ...state,
        salad: state.salad + 1,
      }
    case ADD_TOMATOES:
      return {
        ...state,
        tomatoes: state.tomatoes + 1,
      }
    case ADD_SPICY:
      return {
        ...state,
        spicy: state.spicy + 1,
      }
    case ADD_MAYO:
      return {
        ...state,
        mayo: state.mayo + 1,
      }
    case ADD_BACON:
      return {
        ...state,
        bacon: state.bacon + 1,
      }
    case ADD_MEAT:
      return {
        ...state,
        meat: state.meat + 1,
      }
    default:
      return state
  }
}
