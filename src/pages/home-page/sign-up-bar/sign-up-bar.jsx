import React from 'react';
import MultiSelect from '../../../components/multi-select/multi-select';

const zipCodeText = 'zipCodeText';
const zipCodeTextValue = 'zipCodeTextValue';
const ageRangeLabel = 'ageRangeLabel';
const ageRanges = 'ageRanges';
const selectTitle = 'selectTitle';
const dropDownAction = 'dropDownAction';
const register = 'register';

const {string} = React.PropTypes;

export default function SignUpBar(props) {

	SignUpBar.PropTypes = {
		zipCodeText: string.isRequired,
		zipCodeTextValue: string,
		ageRangeLabel: string.isRequired
	};

	const store = props.store;

	return {

		props,

		render() {

			return (
				<div>
					<div className="col-md-2">
						<fieldset className="form-group">
							<input id="zip-code" className="form-control"
								   placeholder={store.get(zipCodeText)} value={store.get(zipCodeTextValue)}/>
						</fieldset>
					</div>
					<div className="col-md-2">
						<fieldset className="form-group">
							<MultiSelect
								options={store.get(ageRanges)}
								dropDownAction={store.get(dropDownAction)}
								selectTitle={store.get(selectTitle)}/>
						</fieldset>
					</div>
					<div className="col-md-2 continue-button">
						<button type="button" className="btn btn-primary continue-button"
								onClick={store.get(register)}>
							Continue
						</button>
					</div>
				</div>
			);
		}
	}
}
