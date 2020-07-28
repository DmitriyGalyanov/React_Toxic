import {
	DROPDOWN_VALUE_INCREMENT,
	DROPDOWN_VALUE_DECREMENT}
from 'actions/dropdownsActions.js'

const initialState = {
	entries: {
		dropdownValues: {
			adults: 1,
			children: 2,
			babies: 3
		},
		loading: false,
		error: false
	}
}

export const dropdownsReducer = (state = initialState, action) => {
	switch(action.type) {
		case DROPDOWN_VALUE_INCREMENT: {
			const dropdownOptionId = action.payload;
			let updatedEntries = Object.assign({}, state.entries)
			updatedEntries.dropdownValues[dropdownOptionId]++

			return ({
				...state,
				entries: updatedEntries
			})
		};
		case DROPDOWN_VALUE_DECREMENT: {
			const dropdownOptionId = action.payload;
			let updatedEntries = Object.assign({}, state.entries)
			updatedEntries.dropdownValues[dropdownOptionId]--

			return ({
				...state,
				entries: updatedEntries
			})
		};
		default: {
			return state
		};
	}
}