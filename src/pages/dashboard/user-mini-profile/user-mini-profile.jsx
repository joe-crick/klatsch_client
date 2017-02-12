import React from 'react';

const UserMiniProfile = props => {
	return (
		<div className="user-mini-profile">
			<a href="#" className="pull-left">
				<img src="#"/>
			</a>
			<div className="user-data pull-left">
				<div className="username">
					<a href="#" className="mini-profile-name">Monkey Chunk</a>
				</div>
				<div className="userinfo">
					<span className="age">kids: 2, 5</span>
					<span> | </span>
					<span className="location">Seattle, WA</span>
				</div>
			</div>
			<div className="pull -left">
				<a href="#" className="action-center-mail-notification"><span className="fa fa-envelope"/></a>
			</div>
			<div className="clearfix"/>
		</div>
	);
};

UserMiniProfile.propTypes = {};

export default UserMiniProfile;