import {createAction} from 'redux-api-middleware';

export const ROOMS_REQUEST = 'ROOMS_REQUEST';
export const ROOMS_SUCCESS = 'ROOMS_SUCCESS';
export const ROOMS_FAILURE = 'ROOMS_FAILURE';

export const ROOMS_FEEDBACK_LIKES_COUNT_CHANGE = 'ROOMS_FEEDBACK_LIKES_COUNT_CHANGE';

export const roomsLoad = () => createAction({
	endpoint: 'src/data/roomsData.json',
	method: 'GET',
	headers: {'Content-type': 'application/json'},
	types: [ROOMS_REQUEST, ROOMS_SUCCESS, ROOMS_FAILURE]
})

export const roomsFeedbackLikesCountChange = (reviewId, value) => {
	return ({
		type: ROOMS_FEEDBACK_LIKES_COUNT_CHANGE,
		payload: {reviewId, value}
	})
}