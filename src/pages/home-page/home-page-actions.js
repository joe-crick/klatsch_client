import {actionType} from '../../reducers/auth-reducer';

export const loginAction = () => function (user) {
	return {
		type: actionType.LOG_IN,
		payload: user
	}
}();