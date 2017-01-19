export default React => {

	const {string} = React.PropTypes;

	return function NavLogo(props) {

		NavLogo.PropTypes = {
			toggleNavText: string
		};

		return {
			props,
			render() {
				return (
					<klatsch-nav-logo>
						<div className="navbar-header">
							<button type="button" className="navbar-toggle"
									data-toggle="collapse" data-target="#klatsch-nav-bar"
									aria-expanded="false">
								<span className="sr-only">{props.toggleNavText}</span>
								<span className="glyphicon glyphicon-menu-hamburger"></span>
							</button>
							<a className="navbar-brand" href="#">Klatsch</a>
						</div>
					</klatsch-nav-logo>
				);
			}
		}
	}
}
