import React, {Component as RComponent} from 'react';
import { render } from 'react-dom';
import SignUpBar from './components/sign-up-bar/sign-up-bar';
import BottomNav from './components/home-bottom-nav/home-bottom-nav';
import LoginBar from './components/login-bar/login-bar';
require('./main.sass');

class App extends RComponent {
    constructor(props) {
        super(props);
        this.state = {
            navVals: [
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
            ]
        }
    }

    render() {
        return (
            <div>
                <LoginBar loginButton='Login'/>
                <SignUpBar/>
                <BottomNav navItems={this.state.navVals}/>
            </div>
        );
    }
}

if (window !== undefined) {
    window.React = React;
}

render(<App/>, document.querySelector('.container'));
