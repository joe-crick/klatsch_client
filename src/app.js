import React, {Component as RComponent} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search-bar';
import LoginBar from './components/login-bar/login-bar';
import BottomNav from './components/home-bottom-nav/home-bottom-nav';
require('./main.sass');

class App extends RComponent {
    constructor(props) {
        super(props);
        this.state = {
            navVals: [1, 2, 3, 4]
        }
    }

    render() {
        return (<div>
            <SearchBar/>
            <LoginBar/>
            <BottomNav navItems={this.state.navVals}/>
        </div>);
    }
}

if (window !== undefined) {
    window.React = React;
}

ReactDom.render(<App/>, document.querySelector('.container'));