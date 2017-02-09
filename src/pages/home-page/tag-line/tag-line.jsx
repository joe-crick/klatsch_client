import React from 'react';

const {string} = React.PropTypes;

const TagLine = props => (
	<klatsch-tag-line>
		{props.tagLine}
	</klatsch-tag-line>
);

TagLine.PropTypes = {
	tagLine: string.isRequired
};

export default TagLine;
