import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './dashboard.sass';
import QuickPicks from './quick-picks/quick-picks';
import ActionCenter from './action-center/action-center';
import InsightCenter from './insight-center/insight-center';

// TODO: Temporary Code
const userList = [
	{profile: 'Young', img: 'https://childandfamilyri.com/wp-content/uploads/2016/02/young-family.jpg'},
	{
		profile: 'Wang',
		img: 'https://d3n8a8pro7vhmx.cloudfront.net/wfunj/pages/43/attachments/original/1400872367/strengthening-families.jpg?1400872367'
	},
	{profile: 'Tompson', img: 'http://www.fshalifax.com/wp-content/uploads/2016/09/o-FAMILY-VACATION-facebook.jpg'}
];

const showProfile = () => {
};

// END: Temporary code


const {array, func} = React.PropTypes;

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function Dashboard(props) {

	Dashboard.PropTypes = {
		userList: array,
		showProfile: func.isRequired
	};

	return {

		props,

		render() {
			return (
				<klatsch-dashboard>
					<QuickPicks
						profiles={userList}
						showProfile={showProfile}/>
					<ActionCenter/>
					<InsightCenter/>
				</klatsch-dashboard>
			);
		}
	}
}


/**
 * @desc Bind redux state
 * @param state
 * @returns {{authStore: *, homeStore: *}}
 */
function matchStateToProps(state){
	return {
		userList
	}
}

export default connect(matchStateToProps)(Dashboard);
