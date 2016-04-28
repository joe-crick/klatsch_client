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
            ageRange: 0,
            i18n: {
                zipPlaceHolder: 'Zip code'
            }
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

                <form>

                    <fieldset class="form-group">

                        <label htmlFor="zip-code" className="form-control">ZipCode
                            <input
                                id="zip-code"
                                placeholder={this.state.i18n.zipPlaceHolder}
                                value={this.state.zipCode}
                                onChange={event => this.setState({zipCode: event.target.value})}/>
                        </label>

                    </fieldset>

                    <div id="age-selection-container" className="property-selector">
                        <div id="age_dropdown-container" className="input-container select dropdown fixed-width">
                            <fieldset class="form-group">
                                <label htmlFor="age-range">Age Range</label>
                                <select
                                    id="age-range"
                                    value={this.state.ageRange}
                                    onChange={event => this.setState({ageRange: event.target.value})}
                                    className="form-control">
                                    <option value="0"> Baby (0 - 1.5 yrs)</option>
                                    <option value="1"> Toddler (1.5 - 3 yrs)</option>
                                    <option value="2"> Early Childhood (3 - 5 yrs)</option>
                                    <option value="3"> Early Elementary (5 - 7 yrs)</option>
                                    <option value="4"> Late Elementary (7 - 10 yrs)</option>
                                    <option value="5"> Pre-teen (10 - 12 yrs)</option>
                                </select>
                            </fieldset>


                            <button type="button" className="btn btn-primary"> Continue</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginBar;
        