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
				<klatsch-sign-up-bar>
					<form>
						<div className="row login-container container">
							<div className="col-md-3">
								<fieldset className="form-group">
									<label htmlFor="zip-code">{store.get(zipCodeText)}</label>
									<input id="zip-code" className="form-control"
										   placeholder={store.get(zipCodeText)} value={store.get(zipCodeTextValue)}/>
								</fieldset>
							</div>
							<div className="col-md-4">
								<fieldset className="form-group">
									<label>{store.get(ageRangeLabel)}</label>
									<MultiSelect
										options={store.get(ageRanges)}
										dropDownAction={store.get(dropDownAction)}
										selectTitle={store.get(selectTitle)}/>
								</fieldset>
							</div>
							<div className="col-md-4 continue-button">
								<button type="button" className="btn btn-primary continue-button"
										onClick={store.get(register)}>
									Continue
								</button>
							</div>
						</div>
					</form>
				</klatsch-sign-up-bar>
			);
		}
	}
}
