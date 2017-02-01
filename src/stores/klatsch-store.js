import {Map} from 'immutable';
import {combineReducers, createStore} from 'redux';
import authReducer from '../reducers/auth-reducer';

export const INITIAL_STATE = Map({
	isLoggedIn: []
});

const reducers = combineReducers({
	auth: authReducer
});

createStore(reducers, INITIAL_STATE);