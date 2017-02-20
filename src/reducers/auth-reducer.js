import seamless from 'seamless-immutable';
const Immutable = seamless.static;
import INITIAL_STATE from '../stores/auth-store';

// Action type name constants
export const actionType = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  LOGGED_IN: 'LOGGED_IN',
  LOGGED_OUT: 'LOGGED_OUT',
  TOGGLE_REGISTRATION_VIEW: 'TOGGLE_REGISTRATION_VIEW'
};

const isRegistrationVisible = 'isRegistrationVisible';

// Action methods - methods that create a new state
const toggleRegistrationView = state => {
  const isVisible = state.isRegistrationVisible;
  return state.set(isRegistrationVisible, !isVisible);
};

const isAuthenticated = 'isAuthenticated';
const logUserIn = state => Immutable.set(state, isAuthenticated, true);
const logUserOut = state => Immutable.set(state, isAuthenticated, false);

// HashMap to directly call the requested method
const actionMap = new Map();
actionMap.set(actionType.TOGGLE_REGISTRATION_VIEW, toggleRegistrationView);
actionMap.set(actionType.LOG_IN, logUserIn);
actionMap.set(actionType.LOG_OUT, logUserOut);

export default (state = INITIAL_STATE, { type, payload }) => {
  if (type === actionType.LOGGED_IN) {
    return payload
  }
  if (type === actionType.LOGGED_OUT) {
    return {}
  }

  const updater = actionMap.get(type);
  return updater ? updater(state) : state;

}
