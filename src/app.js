import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import App from './pages/app.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './rootReducer';

import profileFactory from './pages/questions/questions.jsx';
import dashboardFactory from './pages/dashboard/dashboard';
import siteTemplate from './page-templates/master-template/master-template';
import './app.sass';

// user: cupid0cpuid
// pass: pass015

// Put React on the window for React tools
if (window !== undefined) {
	window.React = React;
}

const store = createStore(rootReducer);

const SiteTemplate = siteTemplate(React);
const Profile = profileFactory(React);
const Dashboard = dashboardFactory(React);

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
