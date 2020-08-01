import {
	DROPDOWN_VALUE_INCREMENT,
	DROPDOWN_VALUE_DECREMENT,
	DROPDOWN_HEADER_EDIT,
	DROPDOWN_CLEAR,
	DROPDOWN_APPLY}
from 'actions/dropdownsActions.js'

const initialState = {
	entries: {
		guestsDropdownData: {
			header: 'Сколько гостей?',

			mainOptionId: 'adults',
			values: {
				adults: 1,
				children: 0,
				babies: 0,
			},
			names: {
				adults: 'Взрослые',
				children: 'Дети',
				babies: 'Младенцы'
			}
		},
		roomAmenitiesDropdownData: {
			header: 'Сколько спален?',

			mainOptionId: 'bedrooms',
			values: {
				bedrooms: 1,
				beds: 1,
				bathrooms: 1
			},
			names: {
				bedrooms: 'Спальни',
				beds: 'Кровати',
				bathrooms: 'Ванные комнаты'
			}
		},
		loading: false,
		error: false
	}
}

export const dropdownsReducer = (state = initialState, action) => {
	switch(action.type) {
		case DROPDOWN_VALUE_INCREMENT: {
			const {dropdownOptionId, dropdownId} = action.payload;
			let updatedEntries = Object.assign({}, state.entries)
			updatedEntries[dropdownId + 'DropdownData'].values[dropdownOptionId]++

			return ({
				...state,
				entries: updatedEntries
			})
		};
		case DROPDOWN_VALUE_DECREMENT: {
			const {dropdownOptionId, dropdownId} = action.payload;
			let updatedEntries = Object.assign({}, state.entries)
			updatedEntries[dropdownId + 'DropdownData'].values[dropdownOptionId]--

			return ({
				...state,
				entries: updatedEntries
			})
		};
		case DROPDOWN_HEADER_EDIT: {
			const {dropdownId} = action.payload;
			let updatedEntries = Object.assign({}, state.entries)
			const dropdownValuesId = (dropdownId + 'DropdownData');
			const dropdownData = updatedEntries[dropdownValuesId];
			const dropdownOptionsValues = dropdownData.values;
			const dropdownOptionsNames = dropdownData.names;
			const mainOptionId = dropdownData.mainOptionId ?
			dropdownData.mainOptionId : 'Main Option';

			let headerText = ``
			for (let [optionId, optionValue] of Object.entries(dropdownOptionsValues)) {
				if (optionValue > 0) {
					headerText += `${dropdownOptionsNames[optionId]}: ${optionValue}, `
				}
			};
			headerText = headerText.slice(0, headerText.length - 2);

			if (dropdownOptionsValues[mainOptionId] > 0) {
				dropdownData.header = headerText
			} else {
				dropdownData.header = `
				Укажите количество ${dropdownOptionsNames[mainOptionId]}
				`.trim()
			}
			
			return ({
				...state,
				entries: updatedEntries
			})
		};
		case DROPDOWN_CLEAR: {
			const {dropdownId, dropdownOptions} = action.payload;
			let updatedEntries = Object.assign({}, state.entries)
			const dropdownValuesId = (dropdownId + 'DropdownData')
			const dropdownData = updatedEntries[dropdownValuesId];
			const dropdownOptionsValues = dropdownData.values;

			let optionsCounter = 0;
			for (let option of Object.keys(dropdownOptionsValues)) {
				dropdownOptionsValues[option] = dropdownOptions[optionsCounter].minValue;
				optionsCounter++
			}

			return ({
				...state,
				entries: updatedEntries
			})
		};
		case DROPDOWN_APPLY: return state;

		default: return state;
	}
}