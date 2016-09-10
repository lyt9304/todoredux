import { combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
	todos // 这里将会决定store的名字
})

export default rootReducer