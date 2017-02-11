import React from 'react';
import MultiSelect from '../../../components/multi-select/multi-select';
import LoginBar from '../login-bar/login-bar';
import TagLine from '../tag-line/tag-line';

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
				<form className="form-inline">
					<div className="row login-container container">
						<div className="container">
							<div className="col-md-6 home-logo pull-left"></div>
							<div className="col-md-3">
								<fieldset className="form-group">
									<input id="zip-code" className="form-control"
										   placeholder={store.get(zipCodeText)} value={store.get(zipCodeTextValue)}/>
								</fieldset>
							</div>
							<div className="col-md-3">
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
							<LoginBar loginButtonText={props.loginButtonText} logUserIn={props.logUserIn}/>
							<TagLine tagLine={store.tagLine}/></div>
					</div>
				</form>
			);
		}
	}
}
