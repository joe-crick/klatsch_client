import React, {Component as RComponent} from 'react';
import basicSearchBarView from './sign-up-bar-view';
import './sign-up-bar.sass';

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
            },
            ageRangeLabels: {
              baby: 'Baby (0 - 1.5 yrs)',
              toddler: 'Toddler (1.5 - 3 yrs)',
              threeToFive: 'Early Childhood (3 - 5 yrs',
              fiveToSeven: 'Early Elementary (5 - 7 yrs)',
              sevenToTen: 'Late Elementary (7 - 10 yrs)',
              preTeen: 'Pre-teen (10 - 12 yrs)'
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
        return basicSearchBarView.call(this);
    }
}

export default LoginBar;
