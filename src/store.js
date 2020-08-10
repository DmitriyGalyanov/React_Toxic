import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';


import {rootReducer} from 'Redux/reducers';
import {dropdownsMiddleware} from 'middlewares/dropdownsMiddleware.js';
import {likeButtonMiddleware} from 'middlewares/likeButtonMiddleware.js';

import { apiMiddleware } from 'redux-api-middleware';//

export const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(
		dropdownsMiddleware,
		likeButtonMiddleware,
		apiMiddleware
	)
))