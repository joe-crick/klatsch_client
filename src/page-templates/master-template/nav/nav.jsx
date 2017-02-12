import React from 'react';
import NavLogo from './nav-logo/nav-logo';
import QuickLinks from './quick-links/quick-links';
import RightNav from './right-nav/right-nav';

export default props => (
	<nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded home-nav">
		<div className="container-fluid">
			<NavLogo/>
			<div className="collapse navbar-collapse" id="klatsch-nav-bar">
				<QuickLinks />
				<RightNav />
			</div>
		</div>
	</nav>
)

