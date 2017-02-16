import React from 'react';
import QuickLinks from './quick-links/quick-links';
import RightNav from './right-nav/right-nav';
import HomeLogo from '../../../components/home-logo/home-logo';

export default props => (
	<nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded home-nav">
		<button className="navbar-toggler navbar-toggler-right"
				type="button"
				data-toggle="collapse"
				data-target="#navContent"
				aria-controls="navContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"/>
		</button>
		<HomeLogo/>
		<div className="collapse navbar-collapse" id="navContent">
			<QuickLinks/>
			<RightNav/>
		</div>
	</nav>
);

