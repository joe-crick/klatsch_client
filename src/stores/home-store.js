import {extendObservable, computed, action} from 'mobx';
import {emailText, passwordText, closeText, email, password} from './global-store';

let HomeStore = {
    login : 'Login',
    emailText,
    passwordText,
    closeText,
    email,
    password,
    tagLine: 'Connecting Families for Friends, Playdates, and More',
    navVals : [
        {
            "text": "Sign up in a flash!",
            "img": ""
        }, {
            "text": "Find a group you can trust",
            "img": ""
        }, {
            "text": "Go mobile!",
            "img": ""
        }
    ],
    showLoginModal() {
      $('#login-modal').modal('toggle');
    }
};

/*
 * Here's where a lot of the magic occurrs.
 */
HomeStore.changeTitle = action(function changeTitle() {
  this.title = 'Blah';
  this.showLoginModal();
}).bind(HomeStore);

HomeStore.authResponse = action(function authResponse(response) {
  this.loggedIn = response;
}).bind(HomeStore);

extendObservable(HomeStore, {
  title: 'Hello'
});

export default HomeStore;
