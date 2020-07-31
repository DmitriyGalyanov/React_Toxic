import {COST_RANGE_SLIDER_APPLY} from 'actions/costRangeSliderActions.js'

const initialState = {
	entries: {
		mainRangeSliderData: {
			lesserValue: 5000,
			greaterValue: 10000
		},
		loading: false,
		error: false
	}
}

export const costRangeSliderReducer = (state = initialState, action) => {
	switch(action.type) {
		case COST_RANGE_SLIDER_APPLY: {
			const {costRangeSliderId, lesserValue, greaterValue} = action.payload;
			let updatedEntries = Object.assign({}, state.entries);
			updatedEntries[`${costRangeSliderId}RangeSliderData`].lesserValue = lesserValue;
			updatedEntries[costRangeSliderId + 'RangeSliderData'].greaterValue = greaterValue;
			
			return ({
				...state,
				entries: updatedEntries
			})
		};
		default: return state;
	}
}