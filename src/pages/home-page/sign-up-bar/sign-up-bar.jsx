import React from 'react';
import PropTypes from 'prop-types';

const {func} = PropTypes;

export default function SignUpBar(props) {

  SignUpBar.PropTypes = {
    toggleRegistration: func
  };

  return {

    props,

    render() {

      return (
        <div className="navbar-nav mr-auto">
          <form className="form-inline nav-item">
            <button className="btn btn-klatsch-primary continue-button" onClick={event => {
              event.preventDefault();
              this.props.toggleRegistration();
            }
            }>
              Sign Up!
            </button>
          </form>
        </div>
      );
    }
  };
}
