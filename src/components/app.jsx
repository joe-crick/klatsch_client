import React, {Component} from 'react';
import homePageFactory from '../pages/home-page/home-page';
import Dashboard from '../pages/dashboard/dashboard';
import AuthStore from '../stores/auth-store';
import {observer} from 'mobx-react';
import $ from 'jquery';
import './main.sass';

const HomePage = homePageFactory(React);

export default @observer class App extends Component {

    /**
     * componentWillMount - description
     */
    componentWillMount() {
        this.setupAjax();
        AuthStore.createLock();
    }

    /**
     * setupAjax - description
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
     * render - description
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
