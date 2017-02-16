import React from 'react';
import {connect} from 'react-redux';
import ChatHistory from './chat-history/chat-history';
import ChatForm from './chat-form/chat-form';

const {} = React.PropTypes;

function Chat(props) {

  Chat.propTypes = {};

  return {

    props,

    render() {
      return (
        <div className="klatsch-chat">
          <div className="klatsch-chat-header handle">
            <div className="container">
              <h4>Messaging</h4>
              {/*TODO: Remove the close-chat id used for mocking, and replace with onClick*/}
              <button className="btn btn-klatsch-tertiary pull-right" id="close-chat">x</button>
              <div className="clearfix"/>
            </div>
          </div>
          <div className="klatsch-chat-history container">
            <ChatHistory/>
          </div>
          <div className="klatsch-chat-form container">
            <ChatForm/>
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