import React, {Component} from 'react';
import homePageFactory from './home-page/home-page';
import ReactRedirect from 'react-redirect';
import {connect} from 'react-redux';

const HomePage = homePageFactory(React);
const {object} = React.PropTypes;

function App(props) {

	App.PropTypes = {
		authStore: object
	};

	return {
		props,

		render() {
			if (props.authStore.get('idToken')) {
				return (
					<ReactRedirect location='/dashboard'>
						<this.props.activeRouteHandler />
					</ReactRedirect>);
			} else {
				return (
					<HomePage
						authStore={props.authStore}
						homeStore={props.homeStore}/>
				);
			}
		}

	}

}

function mapPropsToState(state) {
	return {
		authStore: state.authStore,
		homeStore: state.homeStore
	}
}

export default connect(mapPropsToState)(App);