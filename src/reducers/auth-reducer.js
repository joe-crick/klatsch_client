import {INITIAL_STATE} from 'stores/auth-store';
import Either from 'data.either';
import Identity from 'ramda/src/identity';
import setState from './set-state';

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

const reducer = (state = INITIAL_STATE, action) =>

	Either(actionMap.get(action.type), state)
		.chain(
			method => setState(action, state)(method),
			Identity
		);

export default reducer;