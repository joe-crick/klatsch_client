import React from 'react';
import {connect} from 'react-redux';

const {} = React.PropTypes;

function Account(props) {

  Account.propTypes = {};

  return {

    props,

    render() {
      return (
        <div className="klatsch-account">
          <div className="container">
            <h4 className="klatsch-account-header">
              My Account
            </h4>
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