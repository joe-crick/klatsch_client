import React from 'react';
import HistoryEntry from './history-entry/history-entry';

// TODO: Implement this correctly
const historyEntries = [
  <HistoryEntry isReply={false} message={'Hello world'}/>,
  <HistoryEntry isReply={true} message={'Hello world'}/>,
  <HistoryEntry isReply={false} message={'Hello world'}/>,
  <HistoryEntry isReply={false} message={'Hello world'}/>,
  <HistoryEntry isReply={true} message={'Hello world'}/>,
  <HistoryEntry isReply={true} message={'Hello world'}/>,
  <HistoryEntry isReply={false} message={'Hello world'}/>
];

const ChatHistory = props => {
  return (
    <div className="klatsch-chat-history container">
      <div className="row">
        {historyEntries.map(entry => {
          return (<div className="col-12">
              {entry}
          </div>)
        })}
      </div>
    </div>

  );
};

ChatHistory.propTypes = {};

export default ChatHistory;