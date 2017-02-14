import React from 'react';

const KlatschTooltip = props => {
  return (
    <div className="klatsch-tooltip">
      <span className="fa fa-question-circle"/>
      <div className="klatsch-tooltip-body">
        {props.children}
      </div>
    </div>
  );
};

KlatschTooltip.propTypes = {};

export default KlatschTooltip;