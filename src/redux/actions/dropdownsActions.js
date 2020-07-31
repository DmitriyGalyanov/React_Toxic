export const DROPDOWN_VALUE_INCREMENT = 'DROPDOWN_VALUE_INCREMENT'
export const DROPDOWN_VALUE_DECREMENT = 'DROPDOWN_VALUE_DECREMENT'
export const DROPDOWN_HEADER_EDIT = 'DROPDOWN_HEADER_EDIT'
export const DROPDOWN_CLEAR = 'DROPDOWN_CLEAR'

export const dropdownValueIncrement = (dropdownOptionId, dropdownId) => {
	return ({
		type: DROPDOWN_VALUE_INCREMENT,
		payload: {dropdownOptionId, dropdownId}
	})
}

export const dropdownValueDecrement = (dropdownOptionId, dropdownId) => {
	return ({
		type: DROPDOWN_VALUE_DECREMENT,
		payload: {dropdownOptionId, dropdownId}
	})
}

export const dropdownHeaderEdit = (dropdownOptionId, dropdownId) => {
	return ({
		type: DROPDOWN_HEADER_EDIT,
		payload: {dropdownOptionId, dropdownId}
	})
}

export const dropdownClear = (dropdownId, dropdownOptions) => {
	return ({
		type: DROPDOWN_CLEAR,
		payload: {dropdownId, dropdownOptions}
	})
}