export const loginAction = () => function (user) {
	return {
		type: 'LOG_IN',
		payload: user
	}
}();

export const logUserOut = user => ({
	type: 'LOG_IN',
	payload: user
});