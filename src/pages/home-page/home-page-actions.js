import {actionType} from '../../reducers/auth-reducer';

export const logUserIn = () => function (user) {
  return {
    type: actionType.LOG_IN,
    payload: user
  };
}();

export const toggleRegistrationView = () => function (user) {
  return {
    type: actionType.TOGGLE_REGISTRATION_VIEW,
    payload: user
  };
}();