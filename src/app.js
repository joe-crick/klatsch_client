import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router';
import App from './components/app.jsx';
import Profile from './pages/questions/questions.jsx';
import './app.sass';

// user: cupid0cpuid
// pass: pass015

// Put React on the window for React tools
if (window !== undefined) {
    window.React = React;
}

/**
 * Routing table
 */
render( (
    <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/profile' component={Profile} />
    </Router>
  ),document.getElementById('app'));
