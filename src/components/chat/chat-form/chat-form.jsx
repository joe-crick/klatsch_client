import React from 'react';
import ToolTip from '../../tooltip/tooltip';

const ChatForm = props => {
  return (
    <div className="klatsch-chat-form">
      <div className="container">
        <form className="basic-content-form">
          <div className="form-group">
            <div className="row">
              <div className="message-input-column col">
                {/*TODO: Wire this up correctly*/}
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Message" aria-describedby="basic-addon"/>
                  <span className="input-group-addon send-message"><span
                    className="send-message fa fa-share-square"/></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col send-silent">
                <button className="btn btn-klatsch-secondary">
                  Silent Send
                </button>
                <ToolTip>
                  When you send a message in "silent mode" it's like sending an email. The recipient gets a notification
                  in their action center that they've received a message, but their chat window does not open.
                </ToolTip>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

ChatForm.propTypes = {};

export default ChatForm;