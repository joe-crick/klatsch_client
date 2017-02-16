import React from 'react';


const QuickFacts = props => {
  return (
    <div className="klatsch-quick-facts">
      <div className="form-group">
        <label htmlFor="family-status">Family Status</label>
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
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value=""/>
                  We drink
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value=""/>
                  We have pets
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value=""/>
                  We are vegan
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value=""/>
                  We are vegetarian
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

QuickFacts.propTypes = {};

export default QuickFacts;