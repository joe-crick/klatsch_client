import React from 'react';

const ProfileHeaderSummary = props => {
  return (
    <div className="klatsch-medium-profile container">
      <div className="row">
        <div className="col-lg-4 col-md-4 profile-thumb">
          <img src="http://www.avatarsdb.com/avatars/dust_of_the_past.gif"
             className="klatsch-medium-profile-image"/>
        </div>
        <div className="col-lg-8 col-md-6 profile-basics">
          <div className="profile-basics-username">Monkey Chunk</div>
          <div className="profile-basics-details">
            <span className="profile-location">Seattle, WA</span>
            <span> | </span>
            <span className="profile-match-percent">90% Match</span>
          </div>
          <div className="family-details">
            <span className="family-summary">Married Couple</span>
            <span className="family-summary"> | </span>
            <span className="family-summary">Kids: Boy (5), Girl (3)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileHeaderSummary.propTypes = {};

export default ProfileHeaderSummary;