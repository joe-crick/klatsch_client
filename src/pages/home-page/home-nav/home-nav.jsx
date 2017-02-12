import React from 'react';
import SignUpBar from '../sign-up-bar/sign-up-bar';
import LoginButton from '../login-bar/login-bar';

const HomeNav = props => {
	return (
		<nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded home-nav">
			<div className="home-logo"></div>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<SignUpBar store={props.homeStore} l/>
				<LoginButton logUserIn={props.logUserIn} loginButtonText={props.loginButtonText}/>
			</div>
		</nav>
	);
};

	HomeNav.propTypes = {};

export default HomeNav;