import React from 'react';

const UserMiniProfile = props => {
	return (
		<div className="user-mini-profile">
			<a href="#" className="pull-left">
				<img src="http://www.avatarsdb.com/avatars/dust_of_the_past.gif" className="mini-profile-image"/>
			</a>
			<div className="user-data pull-left">
				<div className="username">
					<a href="#" className="mini-profile-name">Monkey Chunk</a>
				</div>
				<div className="userinfo">
					<span className="age">kids: 2yrs, 5yrs</span>
					<span> | </span>
					<span className="location">Seattle, WA</span>
				</div>
			</div>
		</div>
	);
};

UserMiniProfile.propTypes = {};

export default UserMiniProfile;