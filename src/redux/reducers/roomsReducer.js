import {ROOMS_REQUEST,
	ROOMS_SUCCESS, ROOMS_FAILURE,
	ROOMS_FEEDBACK_LIKES_COUNT_CHANGE} from 'actions/roomsActions.js';

// const imgSrcStart = `${process.env.PUBLIC_URL}/images/roomsPictures`;
const imgSrcStart = 'images/roomsPictures';

const initialState = {
	entries: [
		{
			id: 888,
			price: 9990,
			isLuxe: true,
			allowed: {
				smoking: true,
				pets: false,
				invitations: true,
				wideCorridors: true,
				disabledAssistance: false,
				breakfast: true,
				desk: true,
				feedingChair: false,
				crib: false,
				tv: true,
				shampoo: true,
			},
			feedback: {
				reviews: [
					{
						senderId: 11, //info about sender will be found via id
						text: `Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто из соседей не жаловался.`,
						likes: 10,
						date: '06.08.2020',
						reviewId: '888/11/1' // room ID/User ID/review number
					},
					{
						senderId: 7,
						text: `Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент`,
						likes: 6,
						date: '07.08.2020',
						reviewId: '888/7/2'
					}
				],
				rate: 5,
				votes: {
					great: 200,
					good: 85,
					passably: 30,
					bad: 5
				}
			},
			images: [
				{
					src: `${imgSrcStart}/roomSpotlight840_1.jpg`,
					name: 'room 888 first picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight350_1.jpg`,
					name: 'room 888 second picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight740_1.jpg`,
					name: 'room 888 third picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight450_1.jpg`,
					name: 'room 888 fourth picture'
				},
			],
			comfortAttributes: [
				{
					name: 'comfort',
					ruName: 'Комфорт',
					desc: 'Шумопоглощающие стены'
				},
				{
					name: 'convenience',
					ruName: 'Удобство',
					desc: 'Окно в каждой из спален'
				},
				{
					name: 'cosiness',
					ruName: 'Уют',
					desc: 'Номер оснащён камином'
				}
			]
		},
		{
			id: 840,
			price: 9900,
			isLuxe: false,
			allowed: {
				smoking: true,
				pets: true,
				invitations: true,
				wideCorridors: true,
				disabledAssistance: false,
				breakfast: true,
				desk: true,
				feedingChair: false,
				crib: false,
				tv: true,
				shampoo: true,
			},
			feedback: {
				reviews: [
					{
						senderId: 7,
						text: `test review text from 7`,
						likes: 11,
						date: '02.08.2020',
						reviewId: '840/11/1'
					},
				],
				rate: 4,
				votes: {
					great: 90,
					good: 40,
					passably: 35,
					bad: 10
				}
			},
			images: [
				{
					src: `${imgSrcStart}/roomSpotlight350_1.jpg`,
					name: 'room 840 first picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight352_1.jpg`,
					name: 'room 840 second picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight450_1.jpg`,
					name: 'room 840 third picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight888_1.jpg`,
					name: 'room 840 fourth picture'
				},
			],
			comfortAttributes: [
				{
					name: 'comfort',
					ruName: 'Комфорт',
					desc: 'Шумопоглощающие стены'
				},
				{
					name: 'convenience',
					ruName: 'Удобство',
					desc: 'Окно в каждой из спален'
				},
			]
		},
		{
			id: 980,
			price: 8500,
			isLuxe: true,
			allowed: {
				smoking: true,
				pets: false,
				invitations: true,
				wideCorridors: true,
				disabledAssistance: false,
				breakfast: true,
				desk: true,
				feedingChair: false,
				crib: false,
				tv: true,
				shampoo: true,
			},
			feedback: {
				reviews: [
					{
						senderId: 11, //info about sender will be found via id
						text: `Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто из соседей не жаловался.`,
						likes: 4,
						date: '03.08.2020',
						reviewId: '980/11/1'
					},
					{
						senderId: 7,
						text: `Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент`,
						likes: 17,
						date: '05.08.2020',
						reviewId: '980/7/2'
					},
				],
				rate: 3,
				votes: {
					great: 40,
					good: 40,
					passably: 45,
					bad: 20
				}
			},
			images: [
				{
					src: `${imgSrcStart}/roomSpotlight982_1.jpg`,
					name: 'room 980 first picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight856_1.jpg`,
					name: 'room 980 second picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight350_1.jpg`,
					name: 'room 980 third picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight450_1.jpg`,
					name: 'room 980 fourth picture'
				},
			],
			comfortAttributes: [
				{
					name: 'comfort',
					ruName: 'Комфорт',
					desc: 'Шумопоглощающие стены'
				},
				{
					name: 'convenience',
					ruName: 'Удобство',
					desc: 'Окно в каждой из спален'
				},
				{
					name: 'cosiness',
					ruName: 'Уют',
					desc: 'Номер оснащён камином'
				}
			]
		},
		{
			id: 856,
			price: 7300,
			isLuxe: false,
			allowed: {
				smoking: true,
				pets: false,
				invitations: true,
				wideCorridors: true,
				disabledAssistance: false,
				breakfast: true,
				desk: true,
				feedingChair: false,
				crib: false,
				tv: true,
				shampoo: true,
			},
			feedback: {
				reviews: [
					{
						senderId: 11, //info about sender will be found via id
						text: `Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто из соседей не жаловался.`,
						likes: 7,
						date: '08.08.2020',
						reviewId: '856/11/1'
					},
					{
						senderId: 7,
						text: `Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент`,
						likes: 19,
						date: '24.07.2020',
						reviewId: '856/7/2'
					}
				],
				rate: 5,
				votes: {
					great: 200,
					good: 85,
					passably: 30,
					bad: 5
				}
			},
			images: [
				{
					src: `${imgSrcStart}/roomSpotlight888_1.jpg`,
					name: 'room 856 first picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight840_1.jpg`,
					name: 'room 856 second picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight350_1.jpg`,
					name: 'room 856 third picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight678_1.jpg`,
					name: 'room 856 fourth picture'
				},
			],
			comfortAttributes: [
				{
					name: 'comfort',
					ruName: 'Комфорт',
					desc: 'Шумопоглощающие стены'
				},
				{
					name: 'convenience',
					ruName: 'Удобство',
					desc: 'Окно в каждой из спален'
				},
			]
		},
		{
			id: 740,
			price: 6000,
			isLuxe: false,
			allowed: {
				smoking: false,
				pets: true,
				invitations: false,
				wideCorridors: false,
				disabledAssistance: false,
				breakfast: true,
				desk: true,
				feedingChair: false,
				crib: false,
				tv: true,
				shampoo: true,
			},
			feedback: {
				reviews: [],
				rate: 4,
				votes: {
					great: 90,
					good: 40,
					passably: 35,
					bad: 10
				}
			},
			images: [
				{
					src: `${imgSrcStart}/roomSpotlight350_1.jpg`,
					name: 'room 740 first picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight982_1.jpg`,
					name: 'room 740 second picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight450_1.jpg`,
					name: 'room 740 third picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight888_1.jpg`,
					name: 'room 740 fourth picture'
				},
			],
			comfortAttributes: [
				{
					name: 'comfort',
					ruName: 'Комфорт',
					desc: 'Шумопоглощающие стены'
				},
				{
					name: 'convenience',
					ruName: 'Удобство',
					desc: 'Окно в каждой из спален'
				},
			]
		},
		{
			id: 982,
			price: 5800,
			isLuxe: false,
			allowed: {
				smoking: false,
				pets: true,
				invitations: false,
				wideCorridors: false,
				disabledAssistance: false,
				breakfast: false,
				desk: true,
				feedingChair: false,
				crib: false,
				tv: false,
				shampoo: true,
			},
			feedback: {
				reviews: [
					{
						senderId: 11, //info about sender will be found via id
						text: `Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто из соседей не жаловался.`,
						likes: 7,
						date: '06.08.2020',
						reviewId: '982/11/1'
					},
					{
						senderId: 7,
						text: `Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент`,
						likes: 23,
						date: '05.08.2020',
						reviewId: '982/7/2'
					},
				],
				rate: 3,
				votes: {
					great: 40,
					good: 40,
					passably: 45,
					bad: 20
				}
			},
			images: [
				{
					src: `${imgSrcStart}/roomSpotlight840_1.jpg`,
					name: 'room 982 first picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight740_1.jpg`,
					name: 'room 982 second picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight350_1.jpg`,
					name: 'room 982 third picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight450_1.jpg`,
					name: 'room 982 fourth picture'
				},
			],
			comfortAttributes: [
				{
					name: 'comfort',
					ruName: 'Комфорт',
					desc: 'Шумопоглощающие стены'
				},
				{
					name: 'convenience',
					ruName: 'Удобство',
					desc: 'Окно в каждой из спален'
				},
			]
		},
		{
			id: 678,
			price: 5500,
			isLuxe: false,
			allowed: {
				smoking: false,
				pets: true,
				invitations: false,
				wideCorridors: false,
				disabledAssistance: false,
				breakfast: false,
				desk: false,
				feedingChair: false,
				crib: false,
				tv: true,
				shampoo: true,
			},
			feedback: {
				reviews: [
					{
						senderId: 11, //info about sender will be found via id
						text: `Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто из соседей не жаловался.`,
						likes: 6,
						date: '06.08.2020',
						reviewId: '678/11/1'
					},
					{
						senderId: 7,
						text: `Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент`,
						likes: 9,
						date: '04.08.2020',
						reviewId: '678/7/2'
					}
				],
				rate: 5,
				votes: {
					great: 200,
					good: 85,
					passably: 30,
					bad: 5
				}
			},
			images: [
				{
					src: `${imgSrcStart}/roomSpotlight840_1.jpg`,
					name: 'room 678 first picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight678_1.jpg`,
					name: 'room 678 second picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight350_1.jpg`,
					name: 'room 678 third picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight450_1.jpg`,
					name: 'room 678 fourth picture'
				},
			],
			comfortAttributes: [
				{
					name: 'comfort',
					ruName: 'Комфорт',
					desc: 'Шумопоглощающие стены'
				},
				{
					name: 'convenience',
					ruName: 'Удобство',
					desc: 'Окно в каждой из спален'
				},
			]
		},
		{
			id: 450,
			price: 5300,
			isLuxe: false,
			allowed: {
				smoking: false,
				pets: true,
				invitations: false,
				wideCorridors: false,
				disabledAssistance: false,
				breakfast: false,
				desk: false,
				feedingChair: false,
				crib: false,
				tv: true,
				shampoo: true,
			},
			feedback: {
				reviews: [
					{
						senderId: 7,
						text: `test review text from 7`,
						likes: 7,
						date: '06.08.2020',
						reviewId: '450/7/1'
					},
				],
				rate: 4,
				votes: {
					great: 90,
					good: 40,
					passably: 35,
					bad: 10
				}
			},
			images: [
				{
					src: `${imgSrcStart}/roomSpotlight856_1.jpg`,
					name: 'room 450 first picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight666_1.jpg`,
					name: 'room 450 second picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight450_1.jpg`,
					name: 'room 450 third picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight888_1.jpg`,
					name: 'room 450 fourth picture'
				},
			],
			comfortAttributes: [
				{
					name: 'comfort',
					ruName: 'Комфорт',
					desc: 'Шумопоглощающие стены'
				},
				{
					name: 'convenience',
					ruName: 'Удобство',
					desc: 'Окно в каждой из спален'
				},
			]
		},
		{
			id: 350,
			price: 5000,
			isLuxe: true,
			allowed: {
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
				shampoo: true,
			},
			feedback: {
				reviews: [
					{
						senderId: 11, //info about sender will be found via id
						text: `Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто из соседей не жаловался.`,
						likes: 24,
						date: '02.08.2020',
						reviewId: '350/11/1'
					},
					{
						senderId: 7,
						text: `Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент`,
						likes: 17,
						date: '08.08.2020',
						reviewId: '350/7/2'
					},
				],
				rate: 3,
				votes: {
					great: 40,
					good: 40,
					passably: 45,
					bad: 20
				}
			},
			images: [
				{
					src: `${imgSrcStart}/roomSpotlight888_1.jpg`,
					name: 'room 350 first picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight444_1.jpg`,
					name: 'room 350 second picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight350_1.jpg`,
					name: 'room 350 third picture'
				},
				{
					src: `${imgSrcStart}/roomSpotlight450_1.jpg`,
					name: 'room 350 fourth picture'
				},
			],
			comfortAttributes: [
				{
					name: 'comfort',
					ruName: 'Комфорт',
					desc: 'Шумопоглощающие стены'
				},
				{
					name: 'convenience',
					ruName: 'Удобство',
					desc: 'Окно в каждой из спален'
				},
				{
					name: 'cosiness',
					ruName: 'Уют',
					desc: 'Номер оснащён камином'
				}
			]
		},
	],
	loading: false,
	error: false
};



export const roomsReducer = (state = initialState, action) => {
	switch(action.type) {
		case ROOMS_REQUEST:
			return ({
				...state,
				loading: true
			});
		case ROOMS_SUCCESS:
			return ({
				...state,
				// entries: action.payload,
				// it doesnt want to work (action.payload === undefined)
				// so I just load it once and work with it after
				//may be routing involved
				loading: false,
				error: false
			});
		case ROOMS_FAILURE:
			return ({
				...state,
				loading: false,
				error: true
			});
		
		case ROOMS_FEEDBACK_LIKES_COUNT_CHANGE: {
			const {reviewId, value} = action.payload;
			let chosenRoom, chosenRoomIndex, chosenReviewIndex;
			let updatedEntries = Object.assign([], state.entries);

			updatedEntries.filter((room, index) => {// that gonna be hitting performance...
				if (+room.id === +reviewId.split('/')[0]) {
					chosenRoom = room;
					chosenRoomIndex = index;
					return true;
				} else return false;
			});
			chosenRoom.feedback.reviews.filter((review, index) => {
				if (review.reviewId === reviewId) {
					chosenReviewIndex = index;
					return true;
				} else return false;
			});

			updatedEntries[chosenRoomIndex].feedback.reviews[chosenReviewIndex].likes += +value;
			return ({
				...state,
				entries: updatedEntries
			})
		}
		default: return state;
	}
}
