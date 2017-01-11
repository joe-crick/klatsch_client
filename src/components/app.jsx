import React, {Component} from 'react';
import homePageFactory from '../pages/home-page/home-page';
import Dashboard from '../pages/dashboard/dashboard';
import AuthStore from '../stores/auth-store';
import {observer} from 'mobx-react';s

const HomePage = homePageFactory(React);

export default @observer class App extends Component {

    /**
     * render - the application
     */
    render() {
        if (AuthStore.idToken) {
            return (
                <Dashboard authStore={AuthStore}/>);
        } else {
            return (
                <HomePage authStore={AuthStore}/>);
        }
    }

};
