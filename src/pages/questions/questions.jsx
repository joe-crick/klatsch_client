import React from 'react';
import Question from './question/question.jsx';
import InPageAlert from '../../components/in-page-alert/in-page-alert';
import './question-page.sass';

const {array} = React.PropTypes;

export default function Questions(props) {

  Questions.PropTypes = {
    questions: array.isRequired
  };

  let containerClassName = 'questions-container ' + (props.questions ? 'questions' : 'no-questions');

  const QuestionList = props.questions ? props.questions.map((question, index) => {
      return <Question props={question} key={index}/>;
    }) : <InPageAlert alertTitle="No Questions" message="No questions have been found for this profile"
              actionTitle="Create Questions" actionHandler="" hasAction={true}/>;
  return {
    props,

    render() {
      return (
        <klatsch-question-page>
          <div className={containerClassName}>
            {QuestionList}
          </div>
        </klatsch-question-page>
      );
    }
  };
}
