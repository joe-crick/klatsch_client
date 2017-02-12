import React from 'react';
import UserMenu from '../user-menu/user-menu';

export default props => (
	<ul className="navbar-nav mr-auto mt-2 mt-lg-0 klatsch-right-nav">
		<li className="nav-item">
			<a href="#" title="Visitors">
				<span className="fa fa-eye" aria-hidden="true"/>
			</a>
		</li>
		<li className="nav-item">
			<a href="#" title="Messages">
				<span className="fa fa-comment" aria-hidden="true"/>
			</a>
		</li>
		<li className="nav-item">
			<a href="#" title="Favorites">
				<span className="fa fa-folder" aria-hidden="true"/>
			</a>
		</li>
		<UserMenu/>
	</ul>
)
