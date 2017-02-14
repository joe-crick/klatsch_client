import {actionType} from '../../reducers/auth-reducer';

export const logUserIn = () => function (user) {
  return {
    type: actionType.LOG_IN,
    payload: user
  }
}();