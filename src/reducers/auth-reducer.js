import INITIAL_STATE from '../stores/auth-store';
import setState from './set-state';
import React from 'react';

// Action type name constants
export const actionType = {
	LOG_IN: 'LOG_IN',
	LOG_OUT: 'LOG_OUT'
};

// Action methods - methods that create a new state
const logUserIn = state => state.set('isAuthenticated', true);
const logUserOut = state => state.set('isAuthenticated', false);

// HashMap to directly call the requested method
const actionMap = new Map();
actionMap.set(actionType.LOG_IN, logUserIn);
actionMap.set(actionType.LOG_OUT, logUserOut);

export default (state = INITIAL_STATE, action) => {
	const currentAction = actionMap.get(action.type);
	const newState = currentAction ? setState(action, state)(method) : state;
	return newState
}