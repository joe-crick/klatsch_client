import React from 'react';
import UserMiniProfile from '../../../../components/user-mini-profile/user-mini-profile';

const InsightCenterNotification = props => {
	return (
		<div className="container insight-center-history">
			<div className="row highlight-row">
				<div className="col-sm-12 col-md-7 col-lg-7">
					<UserMiniProfile/>
				</div>
			</div>
		</div>
	);
};

InsightCenterNotification.propTypes = {};

export default InsightCenterNotification;