import React from 'react';

const ProfileActions = props => {
	return (
		<div className="klatsch-profile-actions">
			<button className="btn btn-klatsch-primary message-button">Message</button>
			<button className="btn btn-klatsch-success">
				<span className="like">Add to Favorites</span>
				<span className="liked">Remove from Favorites</span>
			</button>
			<div className="blocked">
				<div className="blocked-title">User Blocked</div>
				<button className="btn btn-klatsch-danger">Block</button>
				<button className="btn btn-klatsch-success"> Unblock</button>
			</div>
		</div>
	);
};

ProfileActions.propTypes = {};

export default ProfileActions;