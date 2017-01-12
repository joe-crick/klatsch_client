import React, {Component} from 'react';
import homePageFactory from '../pages/home-page/home-page';
import AuthStore from '../stores/auth-store';
import {observer} from 'mobx-react';
import ReactRedirect from 'react-redirect';

const HomePage = homePageFactory(React);

export default @observer
class App extends Component {

	/**
	 * render - the application
	 */
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
