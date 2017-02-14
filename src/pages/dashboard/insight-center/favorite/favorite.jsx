import React from 'react';
import UserMiniProfile from '../../../../components/user-mini-profile/user-mini-profile';

const InsightCenterNotification = props => {
  return (
    <div className="container favorite-entry">
      <div className="row highlight-row">
        <div className="col-sm-8 col-md-7 col-lg-7">
          <UserMiniProfile/>
        </div>
        <div className="col-sm-0"/>
        <div className="col-sm-0 col-md-5 delete-favorite">
          <button className="btn btn-klatsch-danger" onClick={() => alert('TODO: Implement Delete')}>x</button>
        </div>
        <div className="clearfix"/>
      </div>
    </div>
  );
};

InsightCenterNotification.propTypes = {};

export default InsightCenterNotification;