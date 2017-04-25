import React from 'react';
import PropTypes from 'prop-types';
import SignUpBar from '../sign-up-bar/sign-up-bar';
import LoginButton from '../login-bar/login-bar';
import HomeLogo from '../../../components/home-logo/home-logo';

const HomeNav = props => {
  return (
    <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded home-nav">
      <button className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navContent"
              aria-controls="navContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <HomeLogo/>

      <div className="collapse navbar-collapse" id="navContent">
        <SignUpBar store={props.homeStore} toggleRegistration={props.toggleRegistration} />
        <LoginButton loginButtonText={props.loginButtonText} logUserIn={props.logUserIn}/>
      </div>
    </nav>
  );
};

HomeNav.propTypes = {
  toggleRegistration: PropTypes.func,
  loginButtonText: PropTypes.string,
  homeStore: PropTypes.object
};

export default HomeNav;