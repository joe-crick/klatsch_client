import React, {Component as RComponent} from 'react';

class SearchBar extends RComponent {
    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    /**
     * @description render function
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({term: event.target.value})}/><br/>
                Value of the input: {this.state.term}
            </div>
        );
    }

}

export default SearchBar;