import {actionType} from '../../reducers/auth-reducer';

export const logUserOut = () => function (user) {
  return {
    type: actionType.LOG_OUT,
    payload: ''
  };
}();