import React, {Component} from 'react';
import homePageFactory from '../pages/home-page/home-page';
import dashboardFactory from '../pages/dashboard/dashboard';
import AuthStore from '../stores/auth-store';
import {observer} from 'mobx-react';

const HomePage = homePageFactory(React);
const Dashboard = dashboardFactory(React);

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

}
