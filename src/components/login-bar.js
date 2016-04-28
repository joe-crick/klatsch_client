import React, {Component as RComponent} from 'react';

class LoginBar extends RComponent {
    /**
     * @description Constructor function
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            zipCode: '',
            ageRange: 0
        };
        // this.onInputChange = this.onInputChange.bind(this);
    }

    /**
     * @description render function
     * @returns {HTML}
     */
    render() {
        // this.props
        return (
            <div id="splash-bar">
                <label htmlFor="zip-code" className="prefix">ZipCode
                    <input id="zip-code"
                           value={this.state.zipCode}
                           onChange={event => this.setState({zipCode: event.target.value})}/>
                </label>

                <div id="age-selection-container" className="property-selector">
                    <div id="age_dropdown-container" className="input-container select dropdown fixed-width">
                        <select
                            id="age-range"
                            value={this.state.ageRange}
                            onChange={event => this.setState({ageRange: event.target.value})}
                            className="dropdown fixed-width">
                            <option value="0"> Baby (0 - 1.5 yrs)</option>
                            <option value="1"> Toddler (1.5 - 3 yrs)</option>
                            <option value="2"> Early Childhood (3 - 5 yrs)</option>
                            <option value="3"> Early Elementary (5 - 7 yrs)</option>
                            <option value="4"> Late Elementary (7 - 10 yrs)</option>
                            <option value="5"> Pre-teen (10 - 12 yrs)</option>
                        </select>
                        <button type="button" className="btn-primary"> Continue</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginBar;
        