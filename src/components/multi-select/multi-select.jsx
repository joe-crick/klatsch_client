import React from 'react';
import PropTypes from 'prop-types';

// TODO: Implement this without using jQuery

const {string, func, array} = PropTypes;
const toggleDropDown = blah => blah;

export default function MultiSelect(props) {

  MultiSelect.PropTypes = {
    selectTitle: string.isRequired,
    dropDownAction: func.isRequired,
    options: array
  };

  return {

    props,

    render(){
      return (
        <div className="btn-group klatsch-multi-select">
          <button type="button"
              className="btn btn-secondary dropdown-toggle"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={event => toggleDropDown(event.target)}>
            {props.selectTitle}
          </button>
          <div className="dropdown-menu">
            {props.options.map(function (option) {
              return (
                <a className='dropdown-item'
                   key={option.value}
                   onClick={event => alert(option)}>
                  <span className={option.selected ? 'fa fa-check-square' : ''}/>
                  <span className={option.selected ? 'selected' : 'unselected'}>{option.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      );
    }
  };
}
