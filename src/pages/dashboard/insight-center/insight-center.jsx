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
		<div className="container">
			<h4 class="action-center-title">Insight Center</h4>
			<div className="insight-center">
				<ul className="nav nav-tabs" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" data-toggle="tab" href="#visitors" role="tab">Visitors</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" data-toggle="tab" href="#history" role="tab">History</a>
					</li>
				</ul>

				<div className="tab-content">
					<div className="tab-pane active" id="visitors" role="tabpanel">
						<div className="insight-visitors">
							<div className="sub-title">YOUR VISITORS</div>
							<div className="vertical-scrollable-section">{loop}</div>
						</div>
					</div>
					<div className="tab-pane" id="history" role="tabpanel">
						<div className="insight-visits">
							<div className="sub-title">VISIT HISTORY</div>
							<div className="vertical-scrollable-section">{loop}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

InsightCenter.propTypes = {};

export default InsightCenter;