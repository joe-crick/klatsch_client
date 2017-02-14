import React from 'react';
import Tooltip from '../../../components/tooltip/tooltip';

const QuestionTeaser = props => {
  return (
    <aside className="question-teaser page-right-block">
      <h4 className="question-teaser-title">Get Better Results</h4>
      <Tooltip>
        Improve your matches, by answering questions.
      </Tooltip>
      <p className="question">
        <span>What is your opinion of breastfeeding?</span>
      </p>
      <div className="question-teaser-buttons pull-right">
        <a href="#" className="btn btn-klatsch-primary teaser-answer"> Answer </a>
        <a href="#" className="btn btn-secondary teaser-skip"> Skip </a>
      </div>
      <div className="clearfix"/>
    </aside>
  );
};

QuestionTeaser.propTypes = {};

export default QuestionTeaser;