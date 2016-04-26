import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search-bar';

const App = () => {
    return (<div>Hi! <SearchBar/></div>);
};

ReactDom.render(<App/>, document.body);
