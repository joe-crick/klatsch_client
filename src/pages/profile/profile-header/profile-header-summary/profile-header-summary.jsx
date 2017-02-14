import React from 'react';

const ProfileHeaderSummary = props => {
  return (
  <div className="klatsch-profile-header-summary container">
    <div className="row">
      <div className="col summary-title">
        Location:
      </div>
      <div className="col">
        Seattle, WA (within 10 miles)
      </div>
    </div>
    <div className="row">
      <div className="col summary-title">
        Kids:
      </div>
      <div className="col">
        Boy (5), Girl (3)
      </div>
    </div>
    <div className="row">
      <div className="col summary-title">
        Family Status:
      </div>
      <div className="col">
        Married Couple
      </div>
    </div>
    <div className="row">
      <div className="col summary-title">
        Faith:
      </div>
      <div className="col">
        Not Mentioned
      </div>
    </div>
    <div className="row">
      <div className="col summary-title">
        Interests:
      </div>
      <div className="col family-interests vertical-scrollable-section">
        <ul>
          <li>Organic</li>
          <li>Home school</li>
          <li>Theater</li>
          <li>Unschooling</li>
          <li>Free-range kids</li>
          <li>Model cars</li>
          <li>Horses</li>
          <li>Science</li>
        </ul>
      </div>
    </div>
  </div>
  );
};

ProfileHeaderSummary.propTypes = {};

export default ProfileHeaderSummary;