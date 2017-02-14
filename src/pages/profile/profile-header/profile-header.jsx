import React from 'react';
import UserMediumProfile from '../../../components/user-medium-profile/user-medium-profile';
import ProfileActions from '../../../components/profile-actions/profile-actions';
import ProfileHeaderSummary from './profile-header-summary/profile-header-summary';

const ProfileHeader = props => {
  return (
    <div className="klatsch-profile-header container">
      <div className="row">
        <div className="col-lg-5 col-md-9">
          <div className="row">
            <div className="col-sm-12 profile-title-container">
              <UserMediumProfile/>
            </div>
            <div className="col profile-actions-container">
              <ProfileActions/>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <ProfileHeaderSummary/>
        </div>
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {};

export default ProfileHeader;