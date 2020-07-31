export const COST_RANGE_SLIDER_APPLY = 'COST_RANGE_SLIDER_APPLY';

export const costRangeSliderApply = (costRangeSliderId, lesserValue, greaterValue) => {
	return ({
		type: COST_RANGE_SLIDER_APPLY,
		payload: {costRangeSliderId, lesserValue, greaterValue}
	})
}