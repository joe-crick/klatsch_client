import React, {Component as RComponent} from 'react';
import ReactDom from 'react-dom';
import LoginBar from './components/sign-up-bar/sign-up-bar';
import BottomNav from './components/home-bottom-nav/home-bottom-nav';
require('./main.sass');

class App extends RComponent {
    constructor(props) {
        super(props);
        this.state = {
            navVals: [
                {
                    "text": "Sign up in a flash!",
                    "img": ""
                },
                {
                    "text": "Find a group you can trust",
                    "img": ""
                },
                {
                    "text": "Go mobile!",
                    "img": ""
                }
            ]
        }
    }

    render() {
        return (<div>
            <LoginBar/>
            <BottomNav navItems={this.state.navVals}/>
        </div>);
    }
}

if (window !== undefined) {
    window.React = React;
}

ReactDom.render(<App/>, document.querySelector('.container'));
