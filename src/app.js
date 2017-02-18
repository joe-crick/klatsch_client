import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerActions, routerMiddleware} from 'react-router-redux'
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
import Director from './page-templates/director/director';
import {UserAuthWrapper} from 'redux-auth-wrapper'
import logger from 'redux-logger';
import './app.sass';

// user: cupid0cpuid
// pass: pass015

// Put React on the window for React tools
if (window !== undefined) {
  window.React = React;
}

const routingMiddleware = routerMiddleware(browserHistory);
const middleware = applyMiddleware(logger(), routingMiddleware);
const store = createStore(rootReducer, middleware);

const history = syncHistoryWithStore(browserHistory, store);

/**
 * Register the ServiceWorker
 */
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('klatsch-service-worker.js');
}

// Redirects to /registration by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.authStore,
  predicate: user => user.get('isAuthenticated'),
  authenticatingSelector: state => state.authStore.get('isAuthenticated'),
  failureRedirectPath: '/app',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

/**
 * Routing table
 */
const Root = ({store}) => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={Director}>
        <Route path='/' component={HomePage}/>
        <Route component={UserIsAuthenticated(SiteTemplate)}>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/matches' component={Matches}/>
          <Route path="/edit-profile" component={EditProfile}/>
          <Route path="/support" component={Support}/>
        </Route>
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

render(<Root store={store}/>, document.getElementById('app'));
