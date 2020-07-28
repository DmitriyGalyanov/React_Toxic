import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';


import {rootReducer} from 'Redux/reducers';

export const store = createStore(rootReducer, composeWithDevTools(

))