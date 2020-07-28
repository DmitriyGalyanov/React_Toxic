export const DROPDOWN_VALUE_INCREMENT = 'DROPDOWN_VALUE_INCREMENT'
export const DROPDOWN_VALUE_DECREMENT = 'DROPDOWN_VALUE_DECREMENT'

export const dropdownValueIncrement = (dropdownOptionId) => {
	return ({
		type: DROPDOWN_VALUE_INCREMENT,
		payload: dropdownOptionId
	})
}

export const dropdownValueDecrement = (dropdownOptionId) => {
	return ({
		type: DROPDOWN_VALUE_DECREMENT,
		payload: dropdownOptionId
	})
}