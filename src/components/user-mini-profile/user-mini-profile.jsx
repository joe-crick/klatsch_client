import React from 'react';
import {Link} from 'react-router';
import UserMiniProfileIcon from '../user-mini-profile-icon/user-mini-profile-icon';

const UserMiniProfile = props => {
  return (
    <div className="user-mini-profile">
      <Link to={`/profile`} className="pull-left">
        <UserMiniProfileIcon/>
      </Link>
      <div className="user-data pull-left">
        <div className="username">
          <Link to={`/profile`} className="mini-profile-name">Monkey Chunk</Link>
        </div>
        <div className="userinfo">
          <span className="age">kids: 2yrs, 5yrs</span>
          <span> | </span>
          <span className="location">Seattle, WA</span>
        </div>
      </div>
      <div className="clearfix"/>
    </div>
  );
};

UserMiniProfile.propTypes = {};

export default UserMiniProfile;