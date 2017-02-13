import React from 'react';
import ProfileHeaderSummary from './profile-header-summary/profile-header-summary';
import ProfileActions from './profile-actions/profile-actions';

const ProfileHeader = props => {
	return (
		<div className="klatsch-profile-header container">
			<div className="row">
				<div className="col-lg-9 col-md-7">
					<ProfileHeaderSummary/>
				</div>
				<div className="klatsch-profile-header-actions col-lg-3 col-md-3">
					<ProfileActions/>
				</div>
			</div>
		</div>
	);
};

ProfileHeader.propTypes = {};

export default ProfileHeader;