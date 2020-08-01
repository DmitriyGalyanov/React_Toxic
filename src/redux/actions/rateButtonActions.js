export const RATE_BUTTON_APPLY = 'RATE_BUTTON_APPLY'

export const rateButtonApply = (rateButtonId, newRate) => {
	return ({
		type: RATE_BUTTON_APPLY,
		payload: {rateButtonId, newRate}
	})
}