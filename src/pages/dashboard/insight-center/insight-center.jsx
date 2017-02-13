import React from 'react';
import InsightCenterNotification from './insight-center-notification/insight-center-notification';

// TODO: Replace with actual data
const loop = [
	<span key="1"><InsightCenterNotification/></span>,
	<span key="2"><InsightCenterNotification/></span>,
	<span key="3"><InsightCenterNotification/></span>,
];

const InsightCenter = props => {
	return (
		<div className="container insight-center">
			<h4 className="insight-center-title">Insight Center</h4>
			<div className="row">
				<div className="col-md-5 col-sm-12 insight-visitors">
					<h6>Your Visitors</h6>
					<div>{loop}</div>
				</div>
				<div className="col-md-2 col-sm-0 vertical-separator"/>
				<div className="col insight-visits">
					<h6>Visit History</h6>
					<div>{loop}</div>
				</div>
			</div>
		</div>
	);
};

InsightCenter.propTypes = {};

export default InsightCenter;