import React, {Component as RComponent} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search-bar';
import LoginBar from './components/login-bar';

class App extends RComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <SearchBar/>
            <LoginBar/>
        </div>);
    }
}

if(window !== undefined) {
    window.React = React;
}

ReactDom.render(<App/>, document.querySelector('.container'));