import React from 'react';

export default props => {
  let action = '';
  if (props.hasAction) {
    action = <p><a className="btn btn-primary btn-lg" href="#" role="button"
                   onClick={props.actionHandler}>{props.actionTitle}</a></p>
  }
  return (
    <klatsch-in-page-alert>
      <div className="jumbotron">
        <h1>{props.alertTitle}</h1>
        <p>{props.message}</p>
        {action}
      </div>
    </klatsch-in-page-alert>
  );
};
