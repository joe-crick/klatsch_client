import React from 'react';

export default props => (
	<ul className="navbar-nav mr-auto mt-2 mt-lg-0 klatsch-quick-links">
		<li className="nav-item">
			<a className="nav-link" href="#">Find Friends <span className="sr-only">(current)</span></a>
		</li>
		<li className="nav-item">
			<a className="nav-link" href="#">Join a Group</a>
		</li>
		<li className="nav-item">
			<form className="form-inline">
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Find a user" aria-describedby="basic-addon1"/>
					<span className="input-group-addon quick-find-user">Go!</span>
				</div>
			</form>
		</li>
	</ul>
)
