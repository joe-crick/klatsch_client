import {Link} from 'react-router';
import authStore from '../../../../stores/auth-store';

export default props => (
	<li className="dropdown user-profile-avatar" title="User Profile">
		<a href="#"
		   className="dropdown-toggle"
		   data-toggle="dropdown"
		   role="button"
		   aria-haspopup="true"
		   aria-expanded="false">
			<span className="fa fa-user" aria-hidden="true"/>
			<span className="caret"/>
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
			<li role="separator" className="dropdown-divider"/>
			<li>
				<a href="#" className="btn btn-link" onClick={authStore.logout}>Logout</a>
			</li>
		</ul>
	</li>
);
