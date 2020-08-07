//


const imgSrcStart = `${process.env.PUBLIC_URL}/images/roomsPictures`;

const roomsData = {entries: [ // Object.map
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
					text: `test review text from 11`
				},
				{
					senderId: 7,
					text: `test review text from 11`
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
					senderId: 4,
					text: `test review text from 4`
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
					text: `test review text from 11`
				},
				{
					senderId: 7,
					text: `test review text from 11`
				},
				{
					senderId: 9,
					text: `test review text from 9`
				}
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
					text: `test review text from 11`
				},
				{
					senderId: 7,
					text: `test review text from 11`
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
					text: `test review text from 11`
				},
				{
					senderId: 7,
					text: `test review text from 11`
				},
				{
					senderId: 9,
					text: `test review text from 9`
				}
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
					text: `test review text from 11`
				},
				{
					senderId: 7,
					text: `test review text from 11`
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
					senderId: 4,
					text: `test review text from 4`
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
					text: `test review text from 11`
				},
				{
					senderId: 7,
					text: `test review text from 11`
				},
				{
					senderId: 9,
					text: `test review text from 9`
				}
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
]}


export default roomsData;