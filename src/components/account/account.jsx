import React from 'react';
import {connect} from 'react-redux';

function Account(props) {

  Account.propTypes = {};

  return {

    props,

    render() {
      return (
        <div className="klatsch-account">
          <div className="container">
            <form className="basic-content-form">
              <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-lg-5">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                           placeholder="Enter email" autoFocus/>
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="col-lg-5">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <select className="form-control" id="country">
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>United Arab Emirates</option>
                  <option>United Airlines</option>
                </select>
                <label>Postal Code</label>
                <input className="form-control"/>
              </div>
            </form>
          </div>
        </div>
      );
    }
  };

}


/**
 * @desc Bind actions
 * @param dispatch
 * @returns {*}
 */
const matchDispatchToProps = dispatch => ({});

/**
 * @desc Bind redux state
 * @param state
 * @returns {{--prop: *, ...}}
 */
const matchStateToProps = state => ({});

export default connect(matchStateToProps, matchDispatchToProps)(Account);