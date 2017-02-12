import React from 'react';
import QuestionTeaser from '../question-teaser/question-teaser';
import UserMiniProfile from '../user-mini-profile/user-mini-profile';

// TODO: Replace with actual data
const loop = [<UserMiniProfile/>,<UserMiniProfile/>,<UserMiniProfile/>]

const ActionCenter = props => {
	return (
		<div className="container action-center">
			<h4 className="action-center-title">Action Center</h4>
			<div className="row">
				<div className="col-6 action-messages">
					{loop}
				</div>
				<div className="col-2 action-center-separator"/>
				<div className="col action-question-teaser">
					<QuestionTeaser/>
				</div>
			</div>
		</div>
	);
};

ActionCenter.propTypes = {};

export default ActionCenter;