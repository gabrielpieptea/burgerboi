import { combineReducers } from 'redux'
import addToOrder from './addToOrder'
import burger from './burger'
import content from './content'
export default combineReducers({
  addToOrder,
  burger,
})
