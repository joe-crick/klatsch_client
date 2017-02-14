import React from 'react';
import ProfileHeaderTagline from '../../../components/user-medium-profile/user-medium-profile';
import ProfileActions from './profile-actions/profile-actions';
import ProfileHeaderSummary from './profile-header-summary/profile-header-summary';

const ProfileHeader = props => {
	return (
		<div className="klatsch-profile-header container">
			<div className="row">
				<div className="col-lg-5 col-md-9">
					<ProfileHeaderTagline/>
				</div>
				<div className="col-lg-4">
					<ProfileHeaderSummary/>
				</div>
				<div className="klatsch-profile-header-actions col-lg-2 col-md-12">
					<ProfileActions/>
				</div>
			</div>
		</div>
	);
};

ProfileHeader.propTypes = {};

export default ProfileHeader;