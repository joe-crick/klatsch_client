import {observable, computed} from 'mobx';
import {email, password, close} from './global-store';

export default {
    login : 'Login',
    email : email,
    password : password,
    close: close,
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
