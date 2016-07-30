import React, {Component} from 'react';
import homePageFactory from '../pages/home-page/home-page';
import Dashboard from '../pages/dashboard/dashboard';
import AuthStore from '../stores/auth-store';
import {observer} from 'mobx-react';
import $ from 'jquery';

import userFactory from '../pages/user/user-data';

const HomePage = homePageFactory(React);
const User = userFactory(React);

export default @observer class App extends Component {

    /**
     * componentWillMount - description
     */
    componentWillMount() {
        this.setupAjax();
        AuthStore.createLock();
    }

    /**
     * setupAjax - set the request header
     */
    setupAjax() {
        $.ajaxSetup({
            'beforeSend': function(xhr) {
                if (localStorage.getItem('userToken')) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('userToken'));
                }
            }
        });
    }

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
        // return (<User/>)
    }

};
