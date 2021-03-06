import React from 'react';
import UserMiniProfile from 'components/user-mini-profile/user-mini-profile';
import EmailLinkIcon from 'components/email-link-icon/email-link-icon';

const ActionCenterMessage = props => {
  return (
    <div className="action-center-message">
      <UserMiniProfile/>
      <EmailLinkIcon hasBeenOpened={props.hasBeenOpened}/>
      <div className="clearfix"/>
    </div>
  );
};

ActionCenterMessage.propTypes = {};

export default ActionCenterMessage;