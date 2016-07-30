import HomeStore from '../../stores/home-store';
import createSignUpBar from './sign-up-bar/sign-up-bar';
import createLoginBar from './login-bar/login-bar';
import createTagLine from './tag-line/tag-line';

export default React => (props) => {

    let LoginBar = createLoginBar(React);
    let TagLine = createTagLine(React);
    let SignUpBar = createSignUpBar(React);

    return (
        <klatsch-home-page className="container-fluid">
            <div className="home-logo"></div>
            <div>
                {/* LoginBar is an observer. The Observables are defined in home-store.js */}
                <LoginBar store={HomeStore} authStore={props.authStore}/>
                <SignUpBar store={HomeStore}/>
                <TagLine tagLine={HomeStore.tagLine}/>
            </div>
        </klatsch-home-page>
    )
};
