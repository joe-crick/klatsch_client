import React from 'react';
import styles from './main.css';
import SearchBar from './components/search-bar';

const Hello = React.createClass({
    render() {
        return (<div>
                <SearchBar />
                <br/>
            Hello
    </div>);
    }
})

React.render(<Hello/>, document.body);
