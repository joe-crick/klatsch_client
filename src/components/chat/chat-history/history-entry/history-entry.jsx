import React from 'react';
import UserMiniProfileIcon from '../../../user-mini-profile-icon/user-mini-profile-icon';

const HistoryEntry = props => {
  return (
    <div className="klatsch-history-entry row">
      <div className="icon-col col-2">
        <UserMiniProfileIcon/>
      </div>
      <div className="col">
        {props.message}
      </div>
    </div>
  );
};

HistoryEntry.propTypes = {};

export default HistoryEntry;