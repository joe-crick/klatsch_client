import React from 'react';
import {Link} from 'react-router';
import Tooltip from '../../../components/tooltip/tooltip';
import './quick-picks.sass';


const {string} = React.PropTypes;
const topMatchesText = 'This section shows a random selection of your top matches. ' +
	'A match must be 80% or higher to be included in your Top Matches';

function QuickPicks(props) {

	QuickPicks.PropTypes = {
		profile: string,
		img: string
	};

	return {

		props,

		componentDidMount () {
			console.log('Component Did Mount');
		},

		componentWillMount () {
			console.log('Component Will Mount');
		},

		render() {
			return (
				<div className="klatsch-quick-picks-container">
					<h3>Top Matches</h3>
					<Tooltip>
						{topMatchesText}
					</Tooltip>
					<div className="klatsch-quick-picks">
						{props.profiles ?
							(<div>
									<div className="quick-pick-bar">
										{props.profiles.map(function (user, idx) {
											return (
												<Link key={idx} to={`/profile/${user.profile}`}>
													<img className='quick-pick' src={user.img}
														 onClick={props.showProfile(user.profile)}/>
												</Link>
											);
										})}
									</div>
									<button className="btn btn-klatsch-primary quick-picks-refresh">
										<span className="fa fa-refresh"/>
									</button>
								</div>
							)
							: <h3>No Profiles Found</h3>
						}
					</div>
				</div>
			)
		}
	}
}

export default QuickPicks;