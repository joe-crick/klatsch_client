import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import HomePage from './pages/home-page/home-page';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './rootReducer';
import Profile from './pages/profile/profile';
import Dashboard from './pages/dashboard/dashboard';
import Matches from './pages/matches/matches';
import EditProfile from './pages/edit-profile/edit-profile';
import Support from './pages/support/support';
import SiteTemplate from './page-templates/master-template/master-template';
import logger from 'redux-logger';
import './app.sass';

// user: cupid0cpuid
// pass: pass015

// Put React on the window for React tools
if (window !== undefined) {
  window.React = React;
}

const middleware = applyMiddleware(logger());
const store = createStore(rootReducer, middleware);

// TODO: Troubleshoot compiled version

/**
 * Register the ServiceWorker
 */
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('klatsch-service-worker.js');
}

/**
 * Routing table
 */
const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={HomePage}/>
      <Route component={SiteTemplate}>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/matches' component={Matches}/>
        <Route path="/edit-profile" component={EditProfile}/>
        <Route path="/support" component={Support}/>
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

render(<Root store={store}/>, document.getElementById('app'));
