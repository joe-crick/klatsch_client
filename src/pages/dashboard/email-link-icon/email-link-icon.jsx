import React from 'react';

const EmailNotification = props => {

	const envelopeClass = `fa ${props.hasBeenOpened ? 'fa-envelope-open' : 'fa-envelope'}`;
	
	return (
		<div className="pull -left">
			<a href="#" className="email-notification"><span className={envelopeClass}/></a>
		</div>
	);
};

EmailNotification.propTypes = {};

export default EmailNotification;