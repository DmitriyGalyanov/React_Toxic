import {CHECKBOX_TOGGLE} from 'actions/checkboxActions.js';

const initialState = {
	entries: {
		smoking: false,
		pets: true,
		invitations: true,
		wideCorridors: false,
		disabledAssistance: false,
		breakfast: true,
		desk: true,
		feedingChair: false,
		crib: false,
		tv: false,
		shampoo: true,
		loading: false,
		error: false
	}
}

export const checkboxReducer = (state = initialState, action) => {
	switch(action.type) {
		case CHECKBOX_TOGGLE: {
			const checkboxId = action.payload;
			let updatedEntries = Object.assign({}, state.entries)
			updatedEntries[checkboxId] = !updatedEntries[checkboxId];
			return ({
				...state,
				entries: updatedEntries
			});

		}


		default: return state;
	}
}