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
				<div className="navbar-nav mr-auto">
					<form className="form-inline nav-item">
						<input id="zip-code" className="form-control mb-2 mr-sm-2 mb-sm-0"
							   placeholder={store.get(zipCodeText)} value={store.get(zipCodeTextValue)}/>
						<label className="custom-control mb-2 mr-sm-2 mb-sm-0 age-select">
							<MultiSelect
								options={store.get(ageRanges)}
								dropDownAction={store.get(dropDownAction)}
								selectTitle={store.get(selectTitle)}/>
						</label>
						<button type="submit" className="btn btn-klatsch-primary continue-button"
								onClick={store.get(register)}>
							Continue
						</button>
					</form>
				</div>
			);
		}
	}
}
