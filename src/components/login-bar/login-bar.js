import React, {Component as RComponent} from 'react';
import loginBarView from './login-bar-view';
import './login-bar.sass';

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
        return loginBarView.call(this);
    }
}

export default LoginBar;
        