import React from 'react';
import {connect} from 'react-redux';
import ProfileHeader from './profile-header/profile-header';
import ProfileBody from './profile-body/profile-body';

const {} = React.PropTypes;

function Profile(props) {

	Profile.propTypes = {};

	return {

		props,

		render() {
			return (
				<div className="klatsch-profile">
					<div className="klatsch-profile-header-container">
						<ProfileHeader/>
					</div>
					<div className="klatsch-profile-body-container">
						<ProfileBody/>
					</div>
				</div>
			);
		}
	};

}


/**
 * @desc Bind actions
 * @param dispatch
 * @returns {*}
 */
const matchDispatchToProps = dispatch => ({});

/**
 * @desc Bind redux state
 * @param state
 * @returns {{--prop: *, ...}}
 */
const matchStateToProps = state => ({});

export default connect(matchStateToProps, matchDispatchToProps)(Profile);