import React from 'react';
import QuestionTeaser from '../question-teaser/question-teaser';
import UserMiniProfile from '../user-mini-profile/user-mini-profile';

const ActionCenter = props => {
	return (
		<div className="container action-center">
			<div className="col">
				<div className="action-center">Action Center</div>
				<UserMiniProfile/>
			</div>
			<div className="col">
				<QuestionTeaser/>
			</div>
		</div>
	);
};

ActionCenter.propTypes = {};

export default ActionCenter;