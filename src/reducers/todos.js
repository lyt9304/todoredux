import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = [
	{
		text: 'Use Redux',
		completed: false,
		id: 0
	}
]

export default function todos(state = initialState, action) {
	switch(action.type) {
		case ADD_TODO:
			return [
				{
					text: action.text,
					completed: false,
					id: state.reduce(
						(maxId, curr) => Math.max(maxId, curr.id),
						-1 // reduce从-1开始
					) + 1 // 找到最大maxId之后加1, 就是当前新建todo的id
				},
				...state
			]
		case DELETE_TODO:
			return state.filter((todo) => todo.id !== action.id)
		case EDIT_TODO:
			return state.map((todo) => todo.id === action.id ? {...todo, text: action.text} : todo)
		case COMPLETE_TODO:
			return state.map((todo) => todo.id === action.id ? {...todo, completed: true} : todo) 
		case COMPLETE_ALL:
			return state.map((todo) => ({...todo, completed: true}))
		case CLEAR_COMPLETED:
			return state.filter((todo) => todo.completed === false)
		default:
			return state
	}
}