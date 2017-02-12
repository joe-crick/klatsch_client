import React from 'react';
import UserMiniProfile from '../user-mini-profile/user-mini-profile';
import EmailNotification from '../email-link-icon/email-link-icon';

const ActionCenterMessage = props => {
	return (
		<div className="action-center-message">
			<UserMiniProfile/>
			<EmailNotification/>
			<div className="clearfix"/>
		</div>
	);
};

ActionCenterMessage.propTypes = {};

export default ActionCenterMessage;