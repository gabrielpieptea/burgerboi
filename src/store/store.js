import { configureStore } from '@reduxjs/toolkit'
import burgerSlice from '../features/burger'

const reducer = {
  burger: burgerSlice,
}

export default configureStore({
  reducer,
})
