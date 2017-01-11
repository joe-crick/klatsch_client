import { observable, action } from 'mobx';

const ID_TOKEN = 'KlatschIdToken';

let AuthStore = observable({
    idToken: sessionStorage.getItem(ID_TOKEN),
    logoutText: 'Logout'
});

/**
 * [action description]
 * @param  {[type]} function logout(       [description]
 * @return {[type]}          [description]
 */
AuthStore.logout = action(function logout() {
    AuthStore.idToken = '';
	sessionStorage.removeItem(ID_TOKEN);
    location.href = 'http://' + location.host;
});

/**
 * [setIdToken description]
 */
AuthStore.setIdToken = action(function setIdToken() {
    const token = Math.random();
	sessionStorage.setItem(ID_TOKEN, token);
    AuthStore.idToken = token;
});

export default AuthStore;
