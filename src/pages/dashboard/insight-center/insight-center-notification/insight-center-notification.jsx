import React from 'react';
import UserMiniProfile from '../../user-mini-profile/user-mini-profile';

// TODO: Replace with actual data
const timeOnProfile = '3 min';

const InsightCenterNotification = props => {
	return (
		<div className="container insight-center-message">
			<div className="row">
				<div className="col">
					<UserMiniProfile/>
				</div>
				<div className="col-sm-0"/>
				<div className="col time-on-profile">
					Time on Profile: {timeOnProfile}
				</div>
				<div className="clearfix"/>
			</div>
		</div>
	);
};

InsightCenterNotification.propTypes = {};

export default InsightCenterNotification;