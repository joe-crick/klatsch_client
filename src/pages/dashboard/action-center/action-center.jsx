import React from 'react';
import QuestionTeaser from '../question-teaser/question-teaser';
import ActionCenterMessage from './action-center-message/action-center-message';
import Tooltip from '../../../components/tooltip/tooltip';

// TODO: Replace with actual data
const loop = [
  <span key="1"><ActionCenterMessage hasBeenOpened={false}/></span>,
  <span key="2"><ActionCenterMessage hasBeenOpened={true}/></span>,
  <span key="3"><ActionCenterMessage hasBeenOpened={false}/></span>,
];

const ActionCenter = props => {
  return (
    <div className="container action-center">
      <h4 className="action-center-title">Action Center</h4>
      <Tooltip>
        The Action Center keeps you up to date on the latest items requiring your attention.
      </Tooltip>
      <div className="row">
        <div className="action-messages col-md-6 col-sm-12 vertical-scrollable-section">
          {loop}
        </div>
        <div className="col-md-2 col-sm-0 vertical-separator"/>
        <div className="col action-question-teaser">
          <QuestionTeaser/>
        </div>
      </div>
    </div>
  );
};

ActionCenter.propTypes = {};

export default ActionCenter;