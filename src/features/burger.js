import { createSlice } from '@reduxjs/toolkit'

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

const burgerSlice = createSlice({
  name: 'burgers',
  initialState,
  reducers: {
    addCheese(state, { payload }) {
      state.cheese += payload
    },
    addMeat(state) {
      state.meat++
    },
    addBacon(state) {
      state.bacon++
    },
    addSalad(state) {
      state.salad++
    },
    addTomatoes(state) {
      state.tomatoes++
    },
    addPickles(state) {
      state.pickles++
    },
    addOnions(state) {
      state.onions++
    },
  },
})

export const {
  addCheese,
  addBacon,
  addMeat,
  addOnions,
  addPickles,
  addSalad,
  addTomatoes,
} = burgerSlice.actions

export default burgerSlice.reducer
