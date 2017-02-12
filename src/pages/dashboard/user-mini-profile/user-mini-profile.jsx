import React from 'react';

const UserMiniProfile = props => {
	return (
		<div className="profile_info">
			<div className="username">
				<a href="#" className="name">Monkey Chunk</a>
			</div>
			<div className="userinfo">
				<span className="age">kids: 2, 5</span>
				<span> | </span>
				<span className="location">Seattle, WA</span>
			</div>
		</div>
	);
};

UserMiniProfile.propTypes = {};

export default UserMiniProfile;