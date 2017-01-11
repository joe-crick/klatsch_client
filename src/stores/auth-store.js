import { observable, action } from 'mobx';

let AuthStore = observable({
    idToken: '',
    logoutText: 'Logout'
});


/**
 * [action description]
 * @param  {[type]} function logout(       [description]
 * @return {[type]}          [description]
 */
AuthStore.logout = action(function logout() {
    AuthStore.idToken = '';
    location.href = 'http://' + location.host;
});

/**
 * [setIdToken description]
 */
AuthStore.setIdToken = action(function setIdToken() {
    AuthStore.idToken = Math.random();
});

export default AuthStore;
