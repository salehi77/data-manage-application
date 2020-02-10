import { combineReducers } from 'redux'

import localdb from './reducers/localdb'
import theme from './reducers/themeReducer'
export default combineReducers({
  localdb,
  theme,
})
