import './dashboard.sass';
import quickPicksFactory from './quick-picks/quick-picks';

const userList = [
	{profile: 'Young', img: 'https://childandfamilyri.com/wp-content/uploads/2016/02/young-family.jpg'},
	{profile: 'Wang', img: 'https://d3n8a8pro7vhmx.cloudfront.net/wfunj/pages/43/attachments/original/1400872367/strengthening-families.jpg?1400872367'},
	{profile: 'Tompson', img: 'http://www.fshalifax.com/wp-content/uploads/2016/09/o-FAMILY-VACATION-facebook.jpg'}
];

const showProfile = () => {}

export default React => props => {
	const QuickPicks = quickPicksFactory(React);

	return (
		<klatsch-dashboard>
			<QuickPicks profiles={userList} showProfile={showProfile}/>
		</klatsch-dashboard>
	);
};
