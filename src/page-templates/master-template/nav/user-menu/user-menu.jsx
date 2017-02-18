import React from 'react';
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
        <Link to="/edit-profile">Edit Profile</Link>
      </li>
      <li>
        <Link to="/edit-profile#account">Edit Account</Link>
      </li>
      <li>
        <Link to="/support">Help</Link>
      </li>
      <li role="separator" className="dropdown-divider"/>
      <li>
        <button className="btn btn-link" onClick={props.logUserOut}>Logout</button>
      </li>
    </ul>
  </li>
);
