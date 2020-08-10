import {LIKE_BUTTON_SET_LIKED,
	LIKE_BUTTON_SET_UNLIKED} from 'actions/likeButtonActions.js';

const initialState = {
	entries: {'888/11/1': {isLiked: true}},
	loading: false,
	error: false
}

export const likeButtonReducer = (state = initialState, action) => {
	switch(action.type) {
		case LIKE_BUTTON_SET_LIKED: {
			const likeButtonId = action.payload;
			let updatedEntries = Object.assign({}, state.entries);
			updatedEntries[likeButtonId] = updatedEntries[likeButtonId] ?
				updatedEntries[likeButtonId] :
				{};
			updatedEntries[likeButtonId].isLiked = true;
			return ({
				...state,
				entries: updatedEntries
			})
		};
		case LIKE_BUTTON_SET_UNLIKED: {
			const likeButtonId = action.payload;
			let updatedEntries = Object.assign({}, state.entries);
			updatedEntries[likeButtonId] = updatedEntries[likeButtonId] ?
				updatedEntries[likeButtonId] :
				{};
			updatedEntries[likeButtonId].isLiked = false;
			return ({
				...state,
				entries: updatedEntries
			})
		};

		default: return state;
	}
}