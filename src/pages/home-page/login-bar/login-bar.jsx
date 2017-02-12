import React from 'react';

export default props => {

	return (
		<span className="navbar-text">
			<button className='btn btn-default klatsch-login-button' onClick={props.logUserIn}>
			{props.loginButtonText}
		</button>
		</span>
	);
};
