import React from 'react';
import UserMediumProfile from '../../../components/user-medium-profile/user-medium-profile';
import ProfileActions from '../../../components/profile-actions/profile-actions';
import {Link} from 'react-router';

const MatchResults = props => {
	return (
		<div className="klatsch-match-results container">
			<div className="row">
				<div className="col match-entry">
					<div className="row highlight-row">
						<div className="col-lg-6">
							<Link to="/profile" className="match-link">
								<UserMediumProfile/>
							</Link>
						</div>
						<div className="col">
							<ProfileActions/>
						</div>
					</div>
				</div>
				<div className="col match-entry">
					<div className="row highlight-row">
						<div className="col-lg-6">
							<Link to="/profile" className="match-link">
								<UserMediumProfile/>
							</Link>
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