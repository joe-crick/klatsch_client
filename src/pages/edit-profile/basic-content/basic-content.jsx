import React from 'react';
import BadgeInput from '../../../components/badge-input/badge-input';

// TODO: Replace with real data
const tags = ['test', 'this', 'out'];
const noOp = event => event.preventDefault();

const BasicContent = props => {
  return (
    <div className="klatsch-edit-profile-basic-content container">
      <form className="basic-content-form" onSubmit={noOp}>

        <div className="form-group">
          <label htmlFor="family-status">Family Status (Implement as a Dropdown with "Other"</label>
          <select className="form-control" id="family-status">
            <option>Married</option>
            <option>Divorced</option>
            <option>Single</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Family Interests (implement as Trie?)</label>
          <BadgeInput tags={tags}/>
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea className="form-control" rows="4"/>
        </div>

      </form>
    </div>
  );
};

BasicContent.propTypes = {};

export default BasicContent;