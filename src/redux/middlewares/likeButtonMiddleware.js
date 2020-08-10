import {LIKE_BUTTON_SET_LIKED,
	LIKE_BUTTON_SET_UNLIKED} from 'actions/likeButtonActions.js'
import {
	roomsFeedbackLikesCountChange} from 'actions/roomsActions.js';

export const likeButtonMiddleware = store => next => action => {
	if (action.type === LIKE_BUTTON_SET_LIKED) {
		setTimeout(() => {
			store.dispatch(roomsFeedbackLikesCountChange(
				action.payload,
				'1'
			))
		}, 1)
	} else if (action.type === LIKE_BUTTON_SET_UNLIKED) {
		setTimeout(() => {
			store.dispatch(roomsFeedbackLikesCountChange(
				action.payload,
				'-1'
			))
		}, 1)
	}
	return next(action)
}