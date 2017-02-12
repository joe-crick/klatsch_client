import React from 'react';
import QuestionTeaser from '../question-teaser/question-teaser';
import UserMiniProfile from '../user-mini-profile/user-mini-profile';

const ActionCenter = props => {
	return (
		<div className="container action-center">
			<div className="row">
				<div className="col-8 action-messages">
					<h4>Action Center</h4>
					<UserMiniProfile/>
				</div>
				<div className="col action-question-teaser">
					<QuestionTeaser/>
				</div>
			</div>
		</div>
	);
};

ActionCenter.propTypes = {};

export default ActionCenter;