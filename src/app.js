import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './components/app.jsx';
import profile from './pages/questions/questions.jsx';
import siteTemplate from './pages/template/template';
import './app.sass';

// user: cupid0cpuid
// pass: pass015

// Put React on the window for React tools
if (window !== undefined) {
    window.React = React;
}

const SiteTemplate = siteTemplate(React);
const Profile = profile(React);

/**
 * Routing table
 */
render((
    <Router history={browserHistory}>
        <Route path='/' component={App}/>
        <Route component={SiteTemplate}>
            <Route path='/profile' component={Profile}/>
        </Route>
    </Router>
), document.getElementById('app'));
