import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import App from './components/app.jsx';
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

const SiteTemplate = siteTemplate(React);
const Profile = profileFactory(React);
const Dashboard = dashboardFactory(React);

/**
 * Routing table
 */
render((
	<Router history={browserHistory}>
		<Route path='/' component={App}/>
		<Route component={SiteTemplate}>
			<Route path='/dashboard' component={Dashboard}/>
			<Route path='/profile' component={Profile}/>
		</Route>
	</Router>
), document.getElementById('app'));
