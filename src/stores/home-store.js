import {observable, computed} from 'mobx';
import {email, password} from './global-store';

export default {
  login: 'Login',
  email: email,
  password: password,
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
  sayHello() {
    alert('Hello');
  }
}
