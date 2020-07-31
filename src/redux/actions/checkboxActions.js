export const CHECKBOX_TOGGLE = 'CHECKBOX_TOGGLE';

export const checkboxToggle = (checkboxButtonId) => {
	return ({
		type: CHECKBOX_TOGGLE,
		payload: checkboxButtonId
	})
}