import { observable, action } from 'mobx';

let AuthStore = observable({
    lock: '',
    idToken: '',
    logoutText: 'Logout'
});

/**
 * [action description]
 * @param  {[type]} function createLock(   [description]
 * @return {[type]}          [description]
 */
AuthStore.createLock = action(function createLock() {
    AuthStore.lock = new Auth0Lock('L3TTj8GVzhVqjecNGATft2x9SYUQMcBh', 'klatch.auth0.com');
    AuthStore.setIdToken();
});

/**
 * [showLock description]
 * @return {[type]} [description]
 */
AuthStore.showLock = function showLock() {
    AuthStore.lock.show();
};

/**
 * [action description]
 * @param  {[type]} function logout(       [description]
 * @return {[type]}          [description]
 */
AuthStore.logout = action(function logout() {
    localStorage.removeItem('id_token');
    AuthStore.idToken = '';
    location.href = 'http://' + location.host;
});

/**
 * [setIdToken description]
 */
AuthStore.setIdToken = function getIdToken() {
    let idToken = localStorage.getItem('id_token');
    let authHash = AuthStore.lock.parseHash(window.location.hash);
    if (!idToken && authHash) {
        if (authHash.id_token) {
            idToken = authHash.id_token
            localStorage.setItem('id_token', authHash.id_token);
        }
        if (authHash.error) {
            console.log("Error signing in", authHash);
        }
    }
    AuthStore.idToken = idToken;
};

export default AuthStore;
