import './.sass';
import {observer} from 'mobx-react';

export default React => observer((props) => {

    return (
      <klatsch-question-container>
        <div>
          <div className="title">{props.questionTitle}</div>
          {props.children}
          <button type="button" onClick={props.buttonAction}>{props.buttonLabel}</button>
        </div>
      </klatsch-question-container>
    );

}
