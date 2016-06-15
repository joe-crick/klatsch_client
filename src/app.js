import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './components/app.jsx';

// user: cupid0cpuid
// pass: pass015

// Put React on the window for React tools
if (window !== undefined) {
    window.React = React;
}

/**
 * Routing table
 */
render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>, document.getElementById('app')
);
