import {observer} from 'mobx-react';

export default React => observer((props) => {

    return (
        <klatsch-question-container>
            <div>
                <div className="title">{props.questionTitle}</div>
                <button type="button" onClick={props.buttonAction}>{props.buttonLabel}</button>
                <span className="placeholder">{props.placeHolder}</span>
                <div className="editMode">
                    <textarea value={props.answer} placeholder={props.placeHolder}></textarea>
                    <button onClick={props.save} className="btn btn-primary">{props.saveLabel}</button>
                    <button onClick={props.cancel} className="btn btn-primary">{props.cancelLabel}</button>
                </div>
            </div>
        </klatsch-question-container>
    );

}
