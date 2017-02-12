import React from 'react';
import QuestionTeaser from '../question-teaser/question-teaser';
import ActionCenterMessage from './action-center-message/action-center-message';

// TODO: Replace with actual data
const loop = [
	<ActionCenterMessage hasBeenOpened={false}/>,
	<ActionCenterMessage hasBeenOpened={true}/>,
	<ActionCenterMessage hasBeenOpened={false}/>,
];

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