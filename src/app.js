import React from 'react';
import styles from './main.css';

const Hello = React.createClass({
    render() {
        return <div>Hello {this.props.name}</div>;
    }
})

React.render(<Hello name="Joe"/>, document.body);
