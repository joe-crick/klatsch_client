import {observable, computed} from 'mobx';

export default {
  loginButton: 'Login',
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
