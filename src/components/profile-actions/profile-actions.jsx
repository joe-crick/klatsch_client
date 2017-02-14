import React from 'react';

const ProfileActions = props => {
  return (
    <div className="klatsch-profile-actions">
      <button className="btn btn-klatsch-primary message-button">Message</button>
      <div className="user-actions">
        <button className="btn btn-klatsch-success">
          <span className="like">Add to Favorites</span>
          <span className="liked">Remove from Favorites</span>
        </button>
        <span className="fa fa-ban block-user" title="This user is blocked. Click to unblock them."/>
        <span className="fa fa-smile-o unblock-user" title="This user is unblocked. Click to block them."/>
      </div>
    </div>
  );
};

ProfileActions.propTypes = {};

export default ProfileActions;