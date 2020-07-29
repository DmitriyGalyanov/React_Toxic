import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';


import {rootReducer} from 'Redux/reducers';
import {dropdownsMiddleware} from 'middlewares/dropdownsMiddleware.js';

export const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(
		dropdownsMiddleware
	)
))