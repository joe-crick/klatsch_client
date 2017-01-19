import multiSelectFactory from '../../components/multi-select/multi-select';

export default React => {

	const {string, array, func} = React.PropTypes;

	return function UserData(props) {

		UserData.PropTypes = {
			userNameLabel: string,
			genderLabel: string,
			genderOptions: array,
			selectGender: func,
			genderSelectLabel: string,
			ageLabel: string,
			zipCode: string
		};

		let MultiSelect = multiSelectFactory(React);

		return (
			<klatsch-user-data>
				<form>
					<fieldset className="form-group">
						<label htmlFor="user-name">{props.userNameLabel}</label>
						<input id="user-name" className="form-control" type="text"></input>
					</fieldset>
					<fieldset className="form-group">
						<label>{props.genderLabel}
							<MultiSelect options={props.genderOptions} dropDownAction={props.dropDownAction}
										 selectTitle={props.genderSelectLabel}/>
						</label>
					</fieldset>
					<fieldset className="form-group">
						<label htmlFor="age">{props.ageLabel}</label>
						<input id="age" className="form-control" type="number"></input>
					</fieldset>
					<fieldset className="form-group">
						<label htmlFor="zip">{props.zipCode}</label>
						<input id="zip" className="form-control" type="text"></input>
					</fieldset>
				</form>
			</klatsch-user-data>
		);
	}
};
