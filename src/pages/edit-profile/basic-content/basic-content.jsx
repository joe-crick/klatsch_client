import React from 'react';
import QuickFacts from './edit-profile-quick-facts/edit-profile-quick-facts';
import ProfileDetails from './edit-profile-details/edit-profile-details';
import UserMediumProfileIcon from '../../../components/user-medium-profile-icon/user-medium-profile-icon';

// TODO: Replace with real data
const noOp = event => event.preventDefault();

const BasicContent = props => {
  return (
    <div className="klatsch-edit-profile-basic-content container">
      <div className="container">
        <div className="main-profile-picture row">
          {/*TODO: Wire this up to open the photos tab*/}
          <a href="#" title="Primary Profile Image"><UserMediumProfileIcon/></a>
        </div>
        <div className="row">
          <form className="basic-content-form" onSubmit={noOp}>
            <div className="row">
              <div className="col-lg-8 edit-profile-details-column">
                <ProfileDetails/>
              </div>
              <div className="col">
                <QuickFacts/>
              </div>
            </div>
            <div>
              <button className="btn btn-klatsch-primary submit-button">Submit</button>
              <button className="btn btn-klatsch-secondary">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

BasicContent.propTypes = {};

export default BasicContent;