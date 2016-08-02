import HomeStore from '../../stores/home-store';
import createSignUpBar from './sign-up-bar/sign-up-bar';
import createLoginBar from './login-bar/login-bar';
import createTagLine from './tag-line/tag-line';

export default React => (props) => {

    let LoginBar = createLoginBar(React);
    let TagLine = createTagLine(React);
    let SignUpBar = createSignUpBar(React);

    return (
        <klatsch-home-page>
            <div className="home-bg">
                <div className="container">
                    <div className="home-logo"></div>
                    <div>
                        <LoginBar store={HomeStore} authStore={props.authStore}/>
                        <SignUpBar store={HomeStore}/>
                        <TagLine tagLine={HomeStore.tagLine}/>
                    </div>
                </div>
            </div>
        </klatsch-home-page>
    )
};
