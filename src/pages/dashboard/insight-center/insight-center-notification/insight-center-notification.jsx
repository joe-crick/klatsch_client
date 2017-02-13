import React from 'react';
import UserMiniProfile from '../../user-mini-profile/user-mini-profile';

// TODO: Replace with actual data
const timeOnProfile = '3 min';

const InsightCenterNotification = props => {
	return (
		<div className="insight-center-message">
			<UserMiniProfile/>
			<div className="time-on-profile">
				Time on Profile: {timeOnProfile}
			</div>
			<div className="clearfix"/>
		</div>
	);
};

InsightCenterNotification.propTypes = {};

export default InsightCenterNotification;