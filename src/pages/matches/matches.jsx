import React from 'react';
import {connect} from 'react-redux';

const {} = React.PropTypes;

function Matches(props) {

	Matches.propTypes = {};

	return {

		props,

		render() {
			return (
				<div className="klatsch-matches container">
					<div className="row">

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

export default connect(matchStateToProps, matchDispatchToProps)(Matches);