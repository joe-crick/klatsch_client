import React from 'react';
import PropTypes from 'prop-types';

const {string} = PropTypes;

const tagLine = 'tagLine';

const TagLine = props => (
  <div className="klatsch-tag-line">{props.tagLine}</div>
);

TagLine.PropTypes = {
  tagLine: string.isRequired
};

export default TagLine;
