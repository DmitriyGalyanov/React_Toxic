import {
	DROPDOWN_VALUE_INCREMENT,
	DROPDOWN_VALUE_DECREMENT,
	DROPDOWN_HEADER_EDIT,
	DROPDOWN_CLEAR}
from 'actions/dropdownsActions.js'

const initialState = {
	entries: {
		guestsDropdownData: {
			header: 'Сколько гостей?',

			mainOptionId: 'adults',
			values: {
				adults: 0,
				children: 0,
				babies: 0,
			},
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
			const dropdownValuesId = (dropdownId + 'DropdownData')
			const dropdownOptionsValues = updatedEntries[dropdownValuesId].values;
			const mainOptionId = updatedEntries[dropdownValuesId].mainOptionId ?
			updatedEntries[dropdownValuesId].mainOptionId : 'Main Option';

			let headerText = ``
			for (let [optionId, optionValue] of Object.entries(dropdownOptionsValues)) {
				if (optionValue > 0) {
					headerText += `${optionValue} ${optionId}, `
				}
				// console.log(optionId.slice(0, -1))
			};

			if (dropdownOptionsValues.adults > 0) {
				updatedEntries[dropdownValuesId].header = headerText
			} else {
				updatedEntries[dropdownValuesId].header = `
				Specify ${mainOptionId} please
				`.trim()
			}
			
			return ({
				...state,
				entries: updatedEntries
			})
		};
		case DROPDOWN_CLEAR: {
			const dropdownId = action.payload;
			let updatedEntries = Object.assign({}, state.entries)
			const dropdownValuesId = (dropdownId + 'DropdownData')
			const dropdownOptionsValues = updatedEntries[dropdownValuesId].values;
			const mainOptionId = updatedEntries[dropdownValuesId].mainOptionId ?
			updatedEntries[dropdownValuesId].mainOptionId : 'Main Option';
			for (let option of Object.keys(dropdownOptionsValues)) {
				dropdownOptionsValues[option] = 0;
			}
			updatedEntries[dropdownValuesId].header = `
				Specify ${mainOptionId} please
				`.trim()
			return ({
				...state,
				entries: updatedEntries
			})
		}
		default: return state;
	}
}