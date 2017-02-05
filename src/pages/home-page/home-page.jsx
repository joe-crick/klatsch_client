import createSignUpBar from './sign-up-bar/sign-up-bar';
import createLoginBar from './login-bar/login-bar';
import createTagLine from './tag-line/tag-line';

export default React => {

	return function HomePage(props) {

		const LoginBar = createLoginBar(React);
		const TagLine = createTagLine(React);
		const SignUpBar = createSignUpBar(React);
		const homeStore = props.homeStore;

		return {

			props,

			render() {
				return (
					<klatsch-home-page>
						<div className="home-bg">
							<div className="container">
								<div className="home-logo"></div>
								<div>
									<LoginBar store={homeStore} authStore={props.authStore}/>
									<SignUpBar store={homeStore}/>
									<TagLine tagLine={homeStore.tagLine}/>
								</div>
							</div>
						</div>
					</klatsch-home-page>
				)
			}
		}
	}
};
