import React, {Component} from 'react';
import homePageFactory from '../pages/home-page/home-page';
import AuthStore from '../stores/auth-store';
import ReactRedirect from 'react-redirect';
import {connect} from 'react-redux';

const HomePage = homePageFactory(React);

export default React => {

	const {object} = React.PropTypes;

	return function App(props) {


		App.PropTypes = {
			authStore: object
		};

		return {
			props,

			render() {
				if (AuthStore.idToken) {
					return (
						<ReactRedirect location='/dashboard'>
							<this.props.activeRouteHandler />
						</ReactRedirect>);
				} else {
					return (
						<HomePage authStore={AuthStore}/>);
				}
			}

		}

	}

}
