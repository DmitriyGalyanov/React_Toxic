import {CHECKBOX_TOGGLE} from 'actions/checkboxActions.js';

const initialState = {
	entries: {
		smoking: false,
		pets: false,
		invitations: false,
		wideCorridors: false,
		disabledAssistance: false,
		breakfast: false,
		desk: false,
		feedingChair: false,
		crib: false,
		tv: false,
		shampoo: false,
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