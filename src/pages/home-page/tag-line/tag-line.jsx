import React from 'react';

const {string} = React.PropTypes;

const tagLine = 'tagLine';

const TagLine = props => (
	<klatsch-tag-line>
		<div>{props.tagLine}</div>
	</klatsch-tag-line>
);

TagLine.PropTypes = {
	tagLine: string.isRequired
};

export default TagLine;
