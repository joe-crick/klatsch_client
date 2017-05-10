import React from 'react';
import BadgeInput from 'components/badge-input/badge-input';
import DeleteButton from 'components/delete-button/delete-button';

// TODO: Replace with real data
const tags = ['test', 'this', 'out'];

const EditProfileDetails = props => {
  return (
    <div className="klatsch-edit-profile-details">
      <div className="form-group">
        <label>Family Interests (implement as Trie?)</label>
        <BadgeInput tags={tags}/>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col">
            <label htmlFor="family-status">Family Member</label>
            <select className="form-control" id="family-status">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col">
            <label>Age</label>
            <input type="number" className="form-control"/>
          </div>
          <div className="col">
            <label>Interests</label>
            <BadgeInput tags={tags}/>
          </div>
          <div className="col delete-button-container">
            <DeleteButton/>
          </div>
        </div>
        <div className="row add-child-row">
          <div className="col ">
            <button className="btn btn-klatsch-primary pull-right">Add a member</button>
            <div className="clearfix"/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>About our family</label>
        <textarea className="form-control" rows="4"/>
      </div>
      <div className="form-group">
        <label>Some of our favorite things</label>
        <textarea className="form-control" rows="4"/>
      </div>
      <div className="form-group">
        <label>What we're looking for</label>
        <textarea className="form-control" rows="4"/>
      </div>
    </div>
  );
};

EditProfileDetails.propTypes = {};

export default EditProfileDetails;