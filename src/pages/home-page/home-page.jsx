import React from 'react';
import SignUpBar from './sign-up-bar/sign-up-bar';
import LoginBar from './login-bar/login-bar';
import createTagLine from './tag-line/tag-line';
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

	const TagLine = createTagLine(React);
	const homeStore = props.homeStore;

	return {

		props,

		render() {
			return (
				<klatsch-home-page>
					<div className="home-bg">
						<div className="container">
							<div className="home-logo"></div>
							<div>
								<LoginBar loginButtonText={props.loginButtonText} logUserIn={props.logUserIn}/>
								<SignUpBar store={homeStore}/>
								<TagLine tagLine={homeStore.tagLine}/>
							</div>
						</div>
					</div>
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
function matchStateToProps(state){
	const loginButtonText = 'get' in state.authStore ? state.authStore.get('loginButtonText') : '';
	return {
		loginButtonText,
		homeStore: state.homeStore
	}
}

export default connect(matchStateToProps, matchDispatchToProps)(HomePage);