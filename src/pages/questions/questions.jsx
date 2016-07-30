import QuestionStore from '../../stores/question-store';
import createQuestion from '../../components/question/question.jsx';
import './question-page.sass';

export default React => (props) => {

  let Question = createQuestion(React);

    return (
        <klatsch-question-page>
            <div className="home-logo"></div>
            <div>
              {props.questions.map((question, index) => {
                     return <Question props={question} key={index} />;
                 })}
            </div>
        </klatsch-question-page>
    )
};
