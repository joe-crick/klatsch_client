import React from 'react';
import SignUpBar from './sign-up-bar/sign-up-bar';
import LoginBar from './login-bar/login-bar';
import TagLine from './tag-line/tag-line';
import HomeBottomNav from './home-bottom-nav/home-bottom-nav'
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

	return {

		props,

		render() {
			return (
				<klatsch-home-page>
					<section className="home-bg">
						<div className="container-background">
							<form>
								<div className="row login-container container">
									<div className="container">
										<div className="home-logo pull-left"></div>
										<SignUpBar store={homeStore}/>
										<LoginBar loginButtonText={props.loginButtonText} logUserIn={props.logUserIn}/>
										<TagLine tagLine={homeStore.tagLine}/></div>
								</div>
							</form>
						</div>
					</section>
					<section>
						<HomeBottomNav/>
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