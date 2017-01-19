import {Link} from 'react-router';
import './quick-picks.sass';

export default React => {

	const {string} = React.PropTypes;

	return function QuickPicks(props) {

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
					<klatsch-quick-picks>
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
									<button className="btn btn-default"><span className="glyphicon glyphicon-refresh"/>
									</button>
								</div>
							)
							: <h3>No Profiles Found</h3>
						}
					</klatsch-quick-picks>
				)
			}
		}
	};
};