import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import App from './pages/app.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './rootReducer';

import profileFactory from './pages/questions/questions.jsx';
import Dashboard from './pages/dashboard/dashboard';
import SiteTemplate from './page-templates/master-template/master-template';
import './app.sass';

// user: cupid0cpuid
// pass: pass015

// Put React on the window for React tools
if (window !== undefined) {
	window.React = React;
}

const store = createStore(rootReducer);

const Profile = profileFactory(React);

/**
 * Routing table
 */
const Root = ({store}) => (<Provider store={store}>
	<Router history={browserHistory}>
		<Route path='/' component={App}/>
		<Route component={SiteTemplate}>
			<Route path='/dashboard' component={Dashboard}/>
			<Route path='/profile' component={Profile}/>
		</Route>
	</Router>
</Provider>);

Root.propTypes = {
	store: React.PropTypes.object.isRequired,
};

render(<Root store={store} />, document.getElementById('app'));
