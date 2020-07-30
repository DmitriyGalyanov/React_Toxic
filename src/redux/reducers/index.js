import {combineReducers} from 'redux';

import {dropdownsReducer} from './dropdownsReducer.js'
import {datepickerReducer} from './datePickerReducer.js'

export const rootReducer = combineReducers({
	dropdownsData: dropdownsReducer,
	datepickersData: datepickerReducer,
})