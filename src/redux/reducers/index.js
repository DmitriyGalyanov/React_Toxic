import {combineReducers} from 'redux';

import {dropdownsReducer} from './dropdownsReducer.js'
import {datepickerReducer} from './datePickerReducer.js'
import {costRangeSliderReducer} from './costRangeSliderReducer.js'
import {checkboxReducer} from './checkboxReducer.js'
import {rateButtonReducer} from './rateButtonReducer.js'
import {roomsReducer} from './roomsReducer.js'//
import {likeButtonReducer} from './likeButtonReducer.js'


export const rootReducer = combineReducers({
	dropdownsData: dropdownsReducer,
	datepickersData: datepickerReducer,
	costRangeSlidersData: costRangeSliderReducer,
	checkboxesData: checkboxReducer,
	rateButtonsData: rateButtonReducer,
	roomsData: roomsReducer,
	likeButtonsData: likeButtonReducer
})