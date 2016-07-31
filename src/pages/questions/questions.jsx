import QuestionStore from '../../stores/question-store';
import createQuestion from '../../components/question/question.jsx';
import './question-page.sass';

export default React => (props) => {

  let Question = createQuestion(React);

    const Questions = props.questions ? props.questions.map((question, index) => {
           return <Question props={question} key={index} />;
       }) : '';

    return (
        <klatsch-question-page>
            <div className="home-logo"></div>
            <div>
              {Questions}
            </div>
        </klatsch-question-page>
    )
};
