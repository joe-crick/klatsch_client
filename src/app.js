import React, {Component as RComponent} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search-bar';

class App extends RComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>Hi! <SearchBar/></div>);
    }
}

if(window !== undefined) {
    window.React = React;
}

ReactDom.render(<App/>, document.querySelector('.container'));