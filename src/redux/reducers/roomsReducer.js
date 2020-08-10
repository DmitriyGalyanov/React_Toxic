import {ROOMS_REQUEST,
	ROOMS_SUCCESS, ROOMS_FAILURE} from 'actions/roomsActions.js';

const initialState = {
	entries: [
		{
			"id": 888,
			"price": 9990,
			"isLuxe": true,
			"allowed": {
				"smoking": true,
				"pets": false,
				"invitations": true,
				"wideCorridors": true,
				"disabledAssistance": false,
				"breakfast": true,
				"desk": true,
				"feedingChair": false,
				"crib": false,
				"tv": true,
				"shampoo": true
			},
			"feedback": {
				"reviews": [
					{
						"senderId": 11,
						"text": "Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто из соседей не жаловался.",
						"likes": 10,
						"date": "06.08.2020"
					},
					{
						"senderId": 7,
						"text": "Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент",
						"likes": 6,
						"date": "07.08.2020"
					}
				],
				"rate": 5,
				"votes": {
					"great": 200,
					"good": 85,
					"passably": 30,
					"bad": 5
				}
			},
			"images": [
				{
					"src": "images/roomsPictures/roomSpotlight840_1.jpg",
					"name": "room 888 first picture"
				},
				{
					"src": "images/roomsPictures/roomSpotlight350_1.jpg",
					"name": "room 888 second picture"
				},
				{
					"src": "images/roomsPictures/roomSpotlight740_1.jpg",
					"name": "room 888 third picture"
				},
				{
					"src": "images/roomsPictures/roomSpotlight450_1.jpg",
					"name": "room 888 fourth picture"
				}
			],
			"comfortAttributes": [
				{
					"name": "comfort",
					"ruName": "Комфорт",
					"desc": "Шумопоглощающие стены"
				},
				{
					"name": "convenience",
					"ruName": "Удобство",
					"desc": "Окно в каждой из спален"
				},
				{
					"name": "cosiness",
					"ruName": "Уют",
					"desc": "Номер оснащён камином"
				}
			]
		},
		{
			"id": 840,
			"price": 9900,
			"isLuxe": false,
			"allowed": {
				"smoking": true,
				"pets": true,
				"invitations": true,
				"wideCorridors": true,
				"disabledAssistance": false,
				"breakfast": true,
				"desk": true,
				"feedingChair": false,
				"crib": false,
				"tv": true,
				"shampoo": true
			},
			"feedback": {
				"reviews": [
					{
						"senderId": 7,
						"text": "test review text from 7",
						"likes": 11,
						"date": "02.08.2020"
					}
				],
				"rate": 4,
				"votes": {
					"great": 90,
					"good": 40,
					"passably": 35,
					"bad": 10
				}
			},
			"images": [
				{
					"src": "images/roomsPictures/roomSpotlight350_1.jpg",
					"name": "room 840 first picture"
				},
				{
					"src": "images/roomsPictures/roomSpotlight352_1.jpg",
					"name": "room 840 second picture"
				},
				{
					"src": "images/roomsPictures/roomSpotlight450_1.jpg",
					"name": "room 840 third picture"
				},
				{
					"src": "images/roomsPictures/roomSpotlight888_1.jpg",
					"name": "room 840 fourth picture"
				}
			],
			"comfortAttributes": [
				{
					"name": "comfort",
					"ruName": "Комфорт",
					"desc": "Шумопоглощающие стены"
				},
				{
					"name": "convenience",
					"ruName": "Удобство",
					"desc": "Окно в каждой из спален"
				}
			]
		}
	],
	loading: false,
	error: false
}



export const roomsReducer = (state = initialState, action) => {
	switch(action.type) {
		case ROOMS_REQUEST: {
			// console.log(state, 'state request')
			// console.log(action, 'action request')
			return ({
				...state,
				loading: true
			})
		};
		case ROOMS_SUCCESS: {
			// console.log(action, 'action success')
			return ({
				...state,
				entries: action.payload,
				loading: false,
				error: false
			})
		};
		case ROOMS_FAILURE: {
			// console.log(action, 'action failure')
			return ({
				...state,
				loading: false,
				error: true
			})
		}
		default: {
			// console.log(state, 'state default')
			return state
		}
	}
}




// const initialState = {
// 	entries: {roomsData: [
// 		{
// 			"id": 888,
// 			"price": 9990,
// 			"isLuxe": true,
// 			"allowed": {
// 				"smoking": true,
// 				"pets": false,
// 				"invitations": true,
// 				"wideCorridors": true,
// 				"disabledAssistance": false,
// 				"breakfast": true,
// 				"desk": true,
// 				"feedingChair": false,
// 				"crib": false,
// 				"tv": true,
// 				"shampoo": true
// 			},
// 			"feedback": {
// 				"reviews": [
// 					{
// 						"senderId": 11,
// 						"text": "Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто из соседей не жаловался.",
// 						"likes": 10,
// 						"date": "06.08.2020"
// 					},
// 					{
// 						"senderId": 7,
// 						"text": "Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент",
// 						"likes": 6,
// 						"date": "07.08.2020"
// 					}
// 				],
// 				"rate": 5,
// 				"votes": {
// 					"great": 200,
// 					"good": 85,
// 					"passably": 30,
// 					"bad": 5
// 				}
// 			},
// 			"images": [
// 				{
// 					"src": "images/roomsPictures/roomSpotlight840_1.jpg",
// 					"name": "room 888 first picture"
// 				},
// 				{
// 					"src": "images/roomsPictures/roomSpotlight350_1.jpg",
// 					"name": "room 888 second picture"
// 				},
// 				{
// 					"src": "images/roomsPictures/roomSpotlight740_1.jpg",
// 					"name": "room 888 third picture"
// 				},
// 				{
// 					"src": "images/roomsPictures/roomSpotlight450_1.jpg",
// 					"name": "room 888 fourth picture"
// 				}
// 			],
// 			"comfortAttributes": [
// 				{
// 					"name": "comfort",
// 					"ruName": "Комфорт",
// 					"desc": "Шумопоглощающие стены"
// 				},
// 				{
// 					"name": "convenience",
// 					"ruName": "Удобство",
// 					"desc": "Окно в каждой из спален"
// 				},
// 				{
// 					"name": "cosiness",
// 					"ruName": "Уют",
// 					"desc": "Номер оснащён камином"
// 				}
// 			]
// 		},
// 		{
// 			"id": 840,
// 			"price": 9900,
// 			"isLuxe": false,
// 			"allowed": {
// 				"smoking": true,
// 				"pets": true,
// 				"invitations": true,
// 				"wideCorridors": true,
// 				"disabledAssistance": false,
// 				"breakfast": true,
// 				"desk": true,
// 				"feedingChair": false,
// 				"crib": false,
// 				"tv": true,
// 				"shampoo": true
// 			},
// 			"feedback": {
// 				"reviews": [
// 					{
// 						"senderId": 7,
// 						"text": "test review text from 7",
// 						"likes": 11,
// 						"date": "02.08.2020"
// 					}
// 				],
// 				"rate": 4,
// 				"votes": {
// 					"great": 90,
// 					"good": 40,
// 					"passably": 35,
// 					"bad": 10
// 				}
// 			},
// 			"images": [
// 				{
// 					"src": "images/roomsPictures/roomSpotlight350_1.jpg",
// 					"name": "room 840 first picture"
// 				},
// 				{
// 					"src": "images/roomsPictures/roomSpotlight352_1.jpg",
// 					"name": "room 840 second picture"
// 				},
// 				{
// 					"src": "images/roomsPictures/roomSpotlight450_1.jpg",
// 					"name": "room 840 third picture"
// 				},
// 				{
// 					"src": "images/roomsPictures/roomSpotlight888_1.jpg",
// 					"name": "room 840 fourth picture"
// 				}
// 			],
// 			"comfortAttributes": [
// 				{
// 					"name": "comfort",
// 					"ruName": "Комфорт",
// 					"desc": "Шумопоглощающие стены"
// 				},
// 				{
// 					"name": "convenience",
// 					"ruName": "Удобство",
// 					"desc": "Окно в каждой из спален"
// 				}
// 			]
// 		}
// 	],
// 	loading: false,
// 	error: false}
// };
//