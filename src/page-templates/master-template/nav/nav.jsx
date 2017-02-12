import React from 'react';
import QuickLinks from './quick-links/quick-links';
import RightNav from './right-nav/right-nav';

export default props => (
	<klatsch-nav>
		<nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded home-nav">
			<div className="home-logo"></div>
			<div className="collapse navbar-collapse" id="klatsch-nav-bar">
				<QuickLinks />
				<RightNav />
			</div>
		</nav>
	</klatsch-nav>
)

