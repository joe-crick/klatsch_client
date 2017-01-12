import {Link} from 'react-router';
import authStore from '../../../../stores/auth-store';

export default React => (props) => {
    return (
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"
              role="button" aria-haspopup="true" aria-expanded="false">
                <div className="small-circle user-profile-avatar" title="Profile">
                    <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                </div>
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
};
