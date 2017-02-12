import {Link} from 'react-router';
import authStore from '../../../../stores/auth-store';

export default props => (
	<li className="dropdown user-profile-avatar" title="User Profile">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown"
		   role="button" aria-haspopup="true" aria-expanded="false">
			<span className="fa fa-user" aria-hidden="true"></span>
			<span className="caret"></span>
		</a>
		<ul className="dropdown-menu">
			<li>
				<Link to="/profile">Profile</Link>
			</li>
			<li>
				<a href="#">Settings</a>
			</li>
			<li>
				<a href="#">Help</a>
			</li>
			<li role="separator" className="divider"></li>
			<li>
				<button className="btn btn-link" onClick={authStore.logout}>{authStore.logoutText}</button>
			</li>
		</ul>
	</li>
);
