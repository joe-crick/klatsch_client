import React from 'react';

export default props => (
	<klatsch-quick-links>
		<ul className="nav navbar-nav">
			<li className="active">
				<a href="#">Find Friends
					<span className="sr-only">(current)</span>
				</a>
			</li>
			<li>
				<a href="#">Join a Group</a>
			</li>
			<li>
				<form className="navbar-form navbar-left">
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Find a User"/>
					</div>
					<button type="submit" className="btn btn-default">Go!</button>
				</form>
			</li>
		</ul>
	</klatsch-quick-links>
)
