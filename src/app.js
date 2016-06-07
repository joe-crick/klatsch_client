import React, {Component} from 'react';
import {render} from 'react-dom';
import homePageFactory from './pages/home-page/home-page';
import Dashboard from './pages/dashboard/dashboard';
import AuthStore from './stores/auth-store';
import {observer} from 'mobx-react';
import $ from 'jquery';
import './main.sass';

let HomePage = homePageFactory(React);

@observer class App extends Component {

    /**
     * [componentWillMount description]
     * @return {[type]} [description]
     */
    componentWillMount() {
        this.setupAjax();
        AuthStore.createLock();
    }

  /**
   * [setupAjax description]
   * @return {[type]} [description]
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
     * [render description]
     * @return {[type]} [description]
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

// Put React on the window for React tools
if (window !== undefined) {
    window.React = React;
}

render(<App />, document.getElementById('content'));
