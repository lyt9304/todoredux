import * as types from '../constants/ActionTypes'

export function addCount() {
	return {
		type: types.INCREMENT
	}
}

export function minusCount() {
	return {
		type: types.DECREMENT
	}
}

