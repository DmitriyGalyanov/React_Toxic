export const DATEPICKER_APPLY = 'DATEPICKER_APPLY';

export const datepickerApply = (datepickerId, startDate, endDate) => {
	return ({
		type: DATEPICKER_APPLY,
		payload: {datepickerId, startDate, endDate}
	})
}