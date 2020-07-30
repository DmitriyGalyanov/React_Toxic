import {DATEPICKER_APPLY} from 'actions/datePickerActions.js'

const initialState = {
	entries: {
		mainDatepickerData: {
			startDate: new Date(),
			endDate: null
		}
	}
}

export const datepickerReducer = (state = initialState, action) => {
	switch(action.type) {
		case DATEPICKER_APPLY: {
			const {datepickerId, startDate, endDate} = action.payload;
			let updatedEntries = Object.assign({}, state.entries)
			updatedEntries[datepickerId + 'DatepickerData'].startDate = startDate
			updatedEntries[datepickerId + 'DatepickerData'].endDate = endDate
			
			return ({
				...state,
				entries: updatedEntries
			})
		};
		default: return state;
	}
}