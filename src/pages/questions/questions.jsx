import QuestionStore from '../../stores/question-store';
import createQuestion from '../../components/question/question.jsx';
import inPageAlert from '../../components/in-page-alert/in-page-alert';
import './question-page.sass';

export default React => (props) => {

    let Question = createQuestion(React);
    const InPageAlert = inPageAlert(React);
    let containerClassName = 'questions-container ' + (props.questions ? 'questions' : 'no-questions');

    const Questions = props.questions ? props.questions.map((question, index) => {
           return <Question props={question} key={index} />;
       }) : <InPageAlert alertTitle="No Questions" message="No questions have been found for this profile" actionTitle="Create Questions" actionHandler="" hasAction={true}/>;

    return (
        <klatsch-question-page>
            <div className={containerClassName}>
              {Questions}
            </div>
        </klatsch-question-page>
    )
};
