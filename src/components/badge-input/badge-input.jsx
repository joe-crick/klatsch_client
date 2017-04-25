import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const {} = PropTypes;

function BadgeInput(props) {

  BadgeInput.propTypes = {};

  return {

    props,

    manageTags() {

    },

    tagsToBadges(tag, index) {
      return (
        <span key={index} className="klatsch-input-value-badge">
          {tag}
          <span className="remove-tag" data-role="remove-tag">x</span>
        </span>
      );
    },

    render() {
      return (
        <div className="klatsch-badge-input">
          {props.tags.map(this.tagsToBadges)}
          <input type="text" className="klatsch-badge-tag-input" onKeyUp={this.manageTags}/>
        </div>
      );
    }
  };

}


/**
 * @desc Bind actions
 * @param dispatch
 * @returns {*}
 */
const matchDispatchToProps = dispatch => ({});

/**
 * @desc Bind redux state
 * @param state
 * @returns {{--prop: *, ...}}
 */
const matchStateToProps = state => ({});

export default connect(matchStateToProps, matchDispatchToProps)(BadgeInput);