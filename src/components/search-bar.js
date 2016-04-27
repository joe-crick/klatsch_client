import React, {Component as RComponent } from 'react';

class SearchBar extends RComponent {
    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
    }

    /**
     *
     * @returns {XML}
     */
    render () {
        return <input onChange={this.onInputChange} />;
    }

    /**
     * 
     * @param event
     */
    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;