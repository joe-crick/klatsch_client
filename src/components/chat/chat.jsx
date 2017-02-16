import React from 'react';
import {connect} from 'react-redux';

const {} = React.PropTypes;

function Chat(props) {

  Chat.propTypes = {};

  return {

    props,

    render() {
      return (
        <div className="klatsch-chat">
          <div className="klatsch-chat-header">
            <div className="container">
              <h4>Messaging</h4>
            </div>
          </div>
          <div className="klatsch-chat-history container">
            History
          </div>
          <div className="klatsch-chat-form container">
            Form
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

export default connect(matchStateToProps, matchDispatchToProps)(Chat);