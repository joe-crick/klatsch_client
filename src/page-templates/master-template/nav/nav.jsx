import React from 'react';
import NavLogo from './nav-logo/nav-logo';
import QuickLinks from './quick-links/quick-links';
import rightNav from './right-nav/right-nav';

const RightNav = rightNav(React);

export default props => (
	<klatsch-nav>
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container-fluid">
				<NavLogo/>
				<div className="collapse navbar-collapse" id="klatsch-nav-bar">
					<QuickLinks />
					<RightNav />
				</div>
			</div>
		</nav>
	</klatsch-nav>
)

