import React from 'react';
import UserMiniProfile from '../../../../components/user-mini-profile/user-mini-profile';

// TODO: Replace with actual data
const timeOnProfile = '3 min';

const InsightCenterNotification = props => {
	return (
		<div className="container insight-center-message">
			<div className="row highlight-row">
				<div className="col-sm-12 col-md-7 col-lg-7">
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