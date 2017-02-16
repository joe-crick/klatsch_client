import React from 'react';

const EmailNotification = props => {

  const envelopeClass = `fa ${props.hasBeenOpened ? 'fa-envelope-open' : 'fa-envelope'}`;
  const hoverTitle = `${props.hasBeenOpened ? 'read' : 'unread'}`;
  
  return (
    <div className="pull -left">
      <a href="#" className="email-notification" title={hoverTitle}>
        <span className={envelopeClass}/>
      </a>
    </div>
  );
};

EmailNotification.propTypes = {};

export default EmailNotification;