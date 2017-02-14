import React from 'react';
import {connect} from 'react-redux';
const {} = React.PropTypes;
import MatchResults from './match-results/match-results';

function Matches(props) {

  Matches.propTypes = {};

  return {

    props,

    render() {
      return (
        <div className="klatsch-matches">
          <div className="klatsch-match-header-bar">
            <h3 className="match-header">Your Matches</h3>
          </div>
          <div className="container">
            <MatchResults/>
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

export default connect(matchStateToProps, matchDispatchToProps)(Matches);