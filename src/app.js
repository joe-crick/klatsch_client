import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
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
import logger from 'redux-logger';
import PropTypes from 'prop-types';
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

// const auth = Auth('L3TTj8GVzhVqjecNGATft2x9SYUQMcBh', 'klatch.auth0.com');
const auth = {
  loggedIn() {
    return true;
  }
};

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
};

/**
 * Register the ServiceWorker
 */
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('klatsch-service-worker.js');
}

// TODO: Update matchDispatchToProps to conform to template standard

// Redirects to /registration by default
// const UserIsAuthenticated = UserAuthWrapper({
//   authSelector: state => state.authStore,
//   predicate: user => user.get('isAuthenticated'),
//   authenticatingSelector: state => state.authStore.get('isAuthenticated'),
//   failureRedirectPath: '/app',
//   redirectAction: routerActions.replace,
//   wrapperDisplayName: 'UserIsAuthenticated'
// });

/**
 * Routing table
 */
const Root = ({store}) => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={Director}>
        <Route path='/' component={HomePage}/>
        {/*<Route component={UserIsAuthenticated(SiteTemplate)}>*/}
        <Route component={SiteTemplate} onEnter={requireAuth} >
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
  store: PropTypes.object.isRequired,
};

render(<Root store={store}/>, document.getElementById('app'));
