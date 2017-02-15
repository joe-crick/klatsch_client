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
          <label htmlFor="family-status">Family Status (Implement as a Dropdown with "Other")</label>
          <select className="form-control" id="family-status">
            <option>Married</option>
            <option>Divorced</option>
            <option>Single</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Faith (if any)</label>
          <input type="text" className="form-control"/>
        </div>
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
          </div>
          <div className="row add-child-row">
            <div className="col ">
              <button className="btn btn-klatsch-primary pull-right">Add a child</button>
              <div className="clearfix"/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <fieldset>
            <legend>Quick Details</legend>
            <div className="row">
              <div className="col">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value=""/>
                    Smokers
                  </label>
                </div>
                <div className="form-check disabled">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" disabled/>
                    We drink
                  </label>
                </div>
                <div className="form-check disabled">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" disabled/>
                    We have pets
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-check disabled">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" disabled/>
                    We are vegan
                  </label>
                </div>
                <div className="form-check disabled">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" disabled/>
                    We are vegetarian
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
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
        <div className="pull-right">
          <button className="btn btn-klatsch-primary submit-button">Submit</button>
          <button className="btn btn-klatsch-secondary">Cancel</button>
        </div>
        <div className="clearfix"/>
      </form>
    </div>
  );
};

BasicContent.propTypes = {};

export default BasicContent;