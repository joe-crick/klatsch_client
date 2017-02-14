import React from 'react';
import UserMediumProfile from '../../../components/user-medium-profile/user-medium-profile';
import ProfileActions from '../../../components/profile-actions/profile-actions'

const MatchResults = props => {
	return (
		<div className="klatsch-match-results container">
			<div className="row">
				<div className="col match-entry">
					<div className="row">
						<div className="col-lg-6">
							<UserMediumProfile/>
						</div>
						<div className="col">
							<ProfileActions/>
						</div>
					</div>
				</div>
				<div className="col match-entry">
					<div className="row">
						<div className="col-lg-6">
							<UserMediumProfile/>
						</div>
						<div className="col">
							<ProfileActions/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

MatchResults.propTypes = {};

export default MatchResults;