import React from 'react';
import BadgeInput from '../../../components/badge-input/badge-input';

// TODO: Replace with real data
const tags = ['test','this','out'];
const noOp = event => event.preventDefault();

const BasicContent = props => {
  return (
    <div className="klatsch-edit-profile-basic-content container">
      <form className="basic-content-form" onSubmit={noOp}>
        <div className="form-group">
          <label>Bio</label>
            <textarea className="form-control" id="exampleTextarea" rows="3"/>
        </div>
        <div className="form-group">
          <label>Bio</label>
          <BadgeInput tags={tags}/>
        </div>
      </form>
    </div>
  );
};

BasicContent.propTypes = {};

export default BasicContent;