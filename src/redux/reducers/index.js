import {combineReducers} from 'redux';

import {dropdownsReducer} from './dropdownsReducer.js'

export const rootReducer = combineReducers({
	dropdownsData: dropdownsReducer
})