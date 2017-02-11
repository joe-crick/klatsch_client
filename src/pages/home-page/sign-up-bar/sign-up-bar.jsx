import React from 'react';




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

				</div>
			);
		}
	}
}
