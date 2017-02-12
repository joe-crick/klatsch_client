import React from 'react';

const QuestionTeaser = props => {
	return (
		<aside className="question-teaser page-right-block">
			<h3>Improve your matches</h3>
			<p className="question">
				<a href="#">What is your opinion of breastfeeding?</a>
			</p>
			<div className="buttons">
				<a href="#" className="btn btn-klatsch-primary"> Answer </a>
				<a href="#" className="btn btn-secondary"> Skip </a>
			</div>
		</aside>
	);
};

QuestionTeaser.propTypes = {};

export default QuestionTeaser;