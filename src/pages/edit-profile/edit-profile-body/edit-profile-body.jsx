import React from 'react';
import BasicContent from './basic-content/basic-content';

const ProfileBody = props => {
	return (
		<div className="klatsch-edit-profile-body container">
			<h4 className="klatsch-profile-body-header">Profile</h4>
			<nav className="nav nav-pills flex-column flex-sm-row">
				<a className="flex-sm-fill text-sm-center nav-link active" data-toggle="tab" role="tab" href="#basics">Basics</a>
				<a className="flex-sm-fill text-sm-center nav-link" data-toggle="tab" role="tab" href="#photos">Photos</a>
			</nav>
			<div className="tab-content">
				<div className="tab-pane active" id="basics" role="tabpanel">
					<BasicContent/>
				</div>
				<div className="tab-pane" id="photos" role="tabpanel">
					Photos
				</div>
			</div>
		</div>
	);
};

ProfileBody.propTypes = {};

export default ProfileBody;