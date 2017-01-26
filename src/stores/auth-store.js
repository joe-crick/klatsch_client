const ID_TOKEN = 'KlatschIdToken';

let AuthStore = {
    idToken: sessionStorage.getItem(ID_TOKEN),
    logoutText: 'Logout'
};

/**
 * [action description]
 * @param  {[type]} function logout(       [description]
 * @return {[type]}          [description]
 */
AuthStore.logout = function logout() {
    AuthStore.idToken = '';
	sessionStorage.removeItem(ID_TOKEN);
    location.href = 'http://' + location.host;
};

/**
 * [setIdToken description]
 */
AuthStore.setIdToken = function setIdToken() {
    const token = Math.random();
	sessionStorage.setItem(ID_TOKEN, token);
    AuthStore.idToken = token;
};

export default AuthStore;
