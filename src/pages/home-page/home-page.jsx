import React from 'react';
import SignUpBar from './sign-up-bar/sign-up-bar';
import HomeBottomNav from './home-bottom-nav/home-bottom-nav'
import TagLine from './tag-line/tag-line';
import LoginButton from './login-bar/login-bar';
import HomeFooter from './home-footer/home-footer';
import {logUserIn} from './home-page-actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


/**
 * @desc The Home Page container component
 * @param props
 * @returns {*}
 * @constructor
 */
function HomePage(props) {

	const homeStore = props.homeStore;
	const tagLine = 'tagLine';

	return {

		props,

		render() {

			return (
				<klatsch-home-page>
					<section className="home-bg">
						<div className="top-bar">
							<div className="home-logo"></div>
							<div className="action-container">
								<SignUpBar store={homeStore} l/>
								<LoginButton logUserIn={props.logUserIn} loginButtonText={props.loginButtonText}/>
							</div>
						</div>
						<TagLine tagLine={homeStore.get(tagLine)}/>
					</section>
					<section>
						<HomeBottomNav/>
					</section>
					<section>
						<HomeFooter/>
					</section>
				</klatsch-home-page>
			)
		}
	}
}

/**
 * @desc Bind actions
 * @param dispatch
 * @returns {*}
 */
function matchDispatchToProps(dispatch) {
	return bindActionCreators({logUserIn}, dispatch)
}

/**
 * @desc Bind redux state
 * @param state
 * @returns {{authStore: *, homeStore: *}}
 */
function matchStateToProps(state) {
	const loginButtonText = 'get' in state.authStore ? state.authStore.get('loginButtonText') : '';
	return {
		loginButtonText,
		homeStore: state.homeStore
	}
}

export default connect(matchStateToProps, matchDispatchToProps)(HomePage);