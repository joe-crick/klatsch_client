import React from 'react';
import UserMiniProfile from 'components/user-mini-profile/user-mini-profile';
import DeleteButton from 'components/delete-button/delete-button';

const InsightCenterNotification = props => {
  return (
    <div className="container favorite-entry">
      <div className="row highlight-row">
        <div className="col-sm-8 col-md-7 col-lg-7">
          <UserMiniProfile/>
        </div>
        <div className="col-sm-0"/>
        <div className="col-sm-0 col-md-5 delete-favorite">
          <DeleteButton/>
        </div>
        <div className="clearfix"/>
      </div>
    </div>
  );
};

InsightCenterNotification.propTypes = {};

export default InsightCenterNotification;