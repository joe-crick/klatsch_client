import createMultiSelect from '../../../components/multi-select/multi-select';

export default React => {

	const {string} = React.PropTypes;
	const MultiSelect = createMultiSelect(React);

	return function SignUpBar(props) {

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
										<label htmlFor="zip-code">{store.zipCodeText}</label>
										<input id="zip-code" className="form-control"
											   placeholder={store.zipCodeText} value={store.zipCodeTextValue}/>
									</fieldset>
								</div>
								<div className="col-md-4">
									<fieldset className="form-group">
										<label>{store.ageRangeLabel}</label>
										<MultiSelect
											options={store.ageRanges}
											dropDownAction={store.dropDownAction}
											selectTitle={store.selectTitle}/>
									</fieldset>
								</div>
								<div className="col-md-4 continue-button">
									<button type="button" className="btn btn-primary continue-button"
											onClick={store.register}>
										Continue
									</button>
								</div>
							</div>
						</form>
					</klatsch-sign-up-bar>
				);
			}
		}
	};
}
