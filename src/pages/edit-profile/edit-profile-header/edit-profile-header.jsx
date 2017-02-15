import React from 'react';


const ProfileBody = props => {

  const navClassName = nav => `flex-sm-fill text-sm-center nav-link ${nav ? 'active' : ''}`;

  // TODO: Update to work with real data (see comments below)

  return (
    <div className="klatsch-edit-profile-header container">
      <h4 className="klatsch-profile-body-header">Profile</h4>
      <nav className="nav nav-pills flex-column flex-sm-row">
        {/*I need to be updated - pass in props that determine the activity value of
        this nav - gives the ability to open the page to a specific nav, e.g., Profile
        from the User dropdown menu*/}
        <a className={navClassName(true)} data-toggle="tab" role="tab" href="#basics">Basics</a>
        <a className={navClassName(false)} data-toggle="tab" role="tab" href="#photos">Photos</a>
        <a className={navClassName(false)} data-toggle="tab" role="tab" href="#account">Account</a>
      </nav>
    </div>
  );
};

ProfileBody.propTypes = {};

export default ProfileBody;