import React from 'react';
import {connect} from 'react-redux';
import EditProfileBody from './edit-profile-body/edit-profile-body';

const {} = React.PropTypes;

function Profile(props) {

	Profile.propTypes = {};

	return {

		props,

		render() {
			return (
				<div className="klatsch-edit-profile">
					<div className="klatsch-edit-profile-body-container">
						<EditProfileBody/>
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