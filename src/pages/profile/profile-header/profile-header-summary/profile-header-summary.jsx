import React from 'react';

const ProfileHeaderSummary = props => {
	return (
		<div className="klatsch-profile-header-summary container">
			<div className="row">
				<div className="col-lg-2 col-md-2 profile-thumb">
					<img src="http://www.avatarsdb.com/avatars/dust_of_the_past.gif"
						 className="klatsch-profile-header-image"/>
				</div>
				<div className="col-lg-5 col-md-4 profile-basics">
					<div className="profile-basics-username">Monkey Chunk</div>
					<div className="profile-basics-details">
						<span className="profile-location">Seattle, WA</span>
						<span> | </span>
						<span className="profile-match-percent">90% Match</span>
					</div>
				</div>
			</div>
		</div>
	);
};

ProfileHeaderSummary.propTypes = {};

export default ProfileHeaderSummary;