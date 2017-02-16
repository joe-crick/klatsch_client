import React from 'react';

const ChatForm = props => {
  return (
    <div className="klatsch-chat-form">
      <div className="container">
        <form className="basic-content-form">
          <div className="form-group">
            <div className="row">
              <div className="message-input-column col-lg-4">
                {/*TODO: Wire this up correctly*/}
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Message" aria-describedby="basic-addon"/>
                  <span className="input-group-addon send-message"><span
                    className="send-message fa fa-share-square"/></span>
                </div>
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