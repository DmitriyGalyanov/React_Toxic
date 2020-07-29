import {
	DROPDOWN_VALUE_INCREMENT,
	DROPDOWN_VALUE_DECREMENT,
	dropdownHeaderEdit} from 'actions/dropdownsActions.js'

export const dropdownsMiddleware = store => next => action => {
	if (action.type === DROPDOWN_VALUE_INCREMENT ||
			action.type === DROPDOWN_VALUE_DECREMENT) {
				setTimeout(() => {
					store.dispatch(dropdownHeaderEdit(
						action.payload.dropdownOptionId,
						action.payload.dropdownId
						)
					)
				}, 3)
		}
	return next(action)
}