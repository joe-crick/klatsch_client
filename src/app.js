import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search-bar';
import styles from './main.css';

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (<div>Hi! <SearchBar/></div>);
    }
}

ReactDom.render(<App/>, document.body);
