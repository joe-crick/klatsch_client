export default React => {

	const {string} = React.PropTypes;

	return function TagLine(props) {

		TagLine.PropTypes = {
			tagLine: string.isRequired
		};

		return {

			props,

			render() {
				return (
					<klatsch-tag-line>
						{props.tagLine}
					</klatsch-tag-line>
				);
			}
		}
	}
}
