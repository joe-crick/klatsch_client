import React, {Component as RComponent} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search-bar';
import styles from './main.css';

class App extends RComponent {
    constructor(props){
        super(props);
    }
    render() {
        return (<div>Hi! <SearchBar/></div>);
    }
}

var div = document.createElement('div');
div.className = 'content';
document.body.appendChild(div);
ReactDom.render(<App/>, div);