import React from 'react';
import HomePage from './home-page/home-page';
import ReactRedirect from 'react-redirect';
import {connect} from 'react-redux';

const {object} = React.PropTypes;

function App(props) {

	App.propTypes = {
		authStore: object
	};

	return {

		props,

		render() {
			const props = this.props;
			if (props.authStore.get('isAuthenticated')) {
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
	};

}


function mapPropsToState(state) {
	return {
		authStore: state.authStore,
		homeStore: state.homeStore
	}
}

export default connect(mapPropsToState)(App);