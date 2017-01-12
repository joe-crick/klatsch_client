import {observer} from 'mobx-react';
import userMenuFactory from '../user-menu/user-menu'

export default React => observer((props) => {
	let profile = props.userStore.profile;
	let loading = props.userStore.loading;
	const UserMenu = userMenuFactory(React);

	if (profile) {
		return (
			<klatsch-user-bar>
				<div className="pull-xs-left">
					<img title={profile.nickname} className="profile-picture" src={profile.picture}/>
					<UserMenu
						logout={props.authStore.logout}
						logoutText={props.authStore.logoutText}
						profileText={props.userStore.profileText}
					/>
				</div>
				<div className="clear-fix"></div>
			</klatsch-user-bar>
		);
	} else {
		return (
			<div className="loading">{loading}</div>
		);
	}
});
