import React from 'react';
import UserMiniProfileIcon from '../../user-mini-profile-icon/user-mini-profile-icon';

const ChatHistory = props => {
  return (
    <div className="klatsch-chat-history container">
      <div className="row">
        <div className="col-lg-12 col-sm-12 col-md-12">
          <div className="row">
            <div className="icon-col col-sm-2 col-lg-2 col-md-2">
              <UserMiniProfileIcon/>
            </div>
            <div className="col">
              My message goes here...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ChatHistory.propTypes = {};

export default ChatHistory;