import {
	DROPDOWN_VALUE_INCREMENT,
	DROPDOWN_VALUE_DECREMENT,
	DROPDOWN_CLEAR,
	DROPDOWN_APPLY,
	dropdownHeaderEdit} from 'actions/dropdownsActions.js'

export const dropdownsMiddleware = store => next => action => {
	if (action.type === DROPDOWN_VALUE_INCREMENT ||
			action.type === DROPDOWN_VALUE_DECREMENT ||
			action.type === DROPDOWN_CLEAR ||
			action.type === DROPDOWN_APPLY) {
				setTimeout(() => {
					store.dispatch(dropdownHeaderEdit(
						action.payload.dropdownOptionId,
						action.payload.dropdownId
						)
					)
				}, 1)
		}
	return next(action)
}