import {RATE_BUTTON_APPLY} from 'actions/rateButtonActions.js';

const initialState = {
	entries: {
		loading: false,
		error: false
	}
}

export const rateButtonReducer = (state = initialState, action) => {
	switch (action.type) {
		case RATE_BUTTON_APPLY: {
			const {rateButtonId, newRate} = action.payload;

			let updatedEntries = Object.assign({}, state.entries);
			updatedEntries[`${rateButtonId}RateButtonId`] = {}
			updatedEntries[`${rateButtonId}RateButtonId`].rate = newRate;

			return ({
				...state,
				entries: updatedEntries
			})
		};

		default: return state;
	}
}