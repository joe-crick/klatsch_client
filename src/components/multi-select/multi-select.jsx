import React from 'react';
import {toggleDropDown} from '../../utils/componentEvents';

const {string, func, array} = React.PropTypes;

export default function MultiSelect(props) {

	MultiSelect.PropTypes = {
		selectTitle: string.isRequired,
		dropDownAction: func.isRequired,
		options: array
	};

	return {

		props,

		render(){
			return (<klatsch-multi-select>
					<div className="btn-group">
						<button
							type="button"
							className="btn btn-defau lt dropdown-toggle"
							aria-haspopup="true"
							aria-expanded="false"
							onClick={event => toggleDropDown(event.target)}>
							{props.selectTitle}
							<span className="caret"/>
						</button>
						<div className="dropdown-menu">
							{props.options.map(function (option) {
								return (
									<button className='dropdown-item' type="button"
											key={option.value}
											onClick={event => alert(option)}>
										<span className={option.selected ? 'fa fa-check-square' : ''}/>
										<span
											className={option.selected ? 'selected' : 'unselected'}>{option.label}</span>
									</button>
								);
							})}
						</div>
					</div>
				</klatsch-multi-select>
			)
		}
	}
}
