import {createAction, RSAA} from 'redux-api-middleware';

export const ROOMS_REQUEST = 'ROOMS_REQUEST';
export const ROOMS_SUCCESS = 'ROOMS_SUCCESS';
export const ROOMS_FAILURE = 'ROOMS_FAILURE';

export const roomsLoad = () => createAction({
	endpoint: 'src/data/roomsData.json',
	// endpoint: './roomsDatas.json',
	// endpoint: '/api/chats.json',
	// endpoint: '/data/roomsData.json',
	// endpoint: '../../data/roomsData.json',
	method: 'GET',
	headers: {'Content-type': 'application/json'},
	types: [ROOMS_REQUEST, ROOMS_SUCCESS, ROOMS_FAILURE]
	// types: [
	// 	{
	// 		type: ROOMS_REQUEST,
	// 		payload: (action, state) => ({endpoint: action.endpoint})
	// 	},
	// 	ROOMS_SUCCESS,
	// 	ROOMS_FAILURE]
})

// export const roomsLoad = () => ({
// 	[RSAA]: {
// 			endpoint: 'api/chats.json',
// 			method: 'GET',
// 			headers: {'Content-type': 'application/json'},
// 			types: [
// 				ROOMS_REQUEST, ROOMS_SUCCESS, ROOMS_FAILURE
// 			]
// 	}
// });