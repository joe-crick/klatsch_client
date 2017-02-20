import seamless from 'seamless-immutable';
const Immutable = seamless.static;
import {combineReducers, createStore} from 'redux';
import authReducer from '../reducers/auth-reducer';

export const INITIAL_STATE = Immutable({
  isLoggedIn: []
});

const reducers = combineReducers({
  auth: authReducer
});

createStore(reducers, INITIAL_STATE);