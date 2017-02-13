import React from 'react';
import InsightCenterNotification from './insight-center-notification/insight-center-notification';
import Favorite from './favorite/favorite';
import Tooltip from '../../../components/tooltip/tooltip';

// TODO: Replace with actual data
const loop = [
	<span key="1"><InsightCenterNotification/></span>,
	<span key="2"><InsightCenterNotification/></span>,
	<span key="3"><InsightCenterNotification/></span>,
];

const favs = [
	<span key="1"><Favorite/></span>,
	<span key="2"><Favorite/></span>,
	<span key="3"><Favorite/></span>,
];

const InsightCenter = props => {
	return (
		<div className="container insight-center">
			<h4 className="insight-center-title">Insight Center</h4>
			<Tooltip>
				See who is viewing you, and review profiles you've viewed in the past.
			</Tooltip>
			<div className="insight-center">
				<ul className="nav nav-tabs" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" data-toggle="tab" href="#visitors" role="tab">Visitors</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" data-toggle="tab" href="#favorites" role="tab">Favorites</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" data-toggle="tab" href="#history" role="tab">History</a>
					</li>
				</ul>

				<div className="tab-content">
					<div className="tab-pane active" id="visitors" role="tabpanel">
						<div className="insight-data-pane insight-visitors">
							<div className="vertical-scrollable-section">{loop}</div>
						</div>
					</div>
					<div className="tab-pane" id="favorites" role="tabpanel">
						<div className="insight-data-pane insight-favorites">
							<div className="vertical-scrollable-section">{favs}</div>
						</div>
					</div>
					<div className="tab-pane" id="history" role="tabpanel">
						<div className="insight-data-pane insight-visits">
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