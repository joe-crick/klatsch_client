import {observable, computed} from 'mobx';
import {email, password, close, emailPromise} from './global-store';

export default {
    login : 'Login',
    email : email,
    password : password,
    close: close,
    emailPromise: emailPromise,
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
}
