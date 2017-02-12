import React from 'react';

const QuestionTeaser = props => {
	return (
		<aside className="question-teaser page-right-block">
			<h4>Get Better Results</h4>
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