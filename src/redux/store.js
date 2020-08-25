import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import burger from '../store/reducers/burger'
import addToOrder from '../store/reducers/addToOrder'

const store = configureStore({
  reducer: {
    burger: burger,
    addToOrder: addToOrder,
  },
})

export default store
