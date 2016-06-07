import HomeStore from '../../stores/home-store';
import BasicSearchBar from './sign-up-bar/sign-up-bar';
import createLoginBar from './login-bar/login-bar';
import createTagLine from './tag-line/tag-line';
import './home-page.sass';

export default React => (props) => {

  let LoginBar = createLoginBar(React);
  let TagLine = createTagLine(React);

    return (
        <klatch-home-page>
            <div className="home-logo"></div>
            <div>
                {/* LoginBar is an observer. The Observables are defined in home-store.js */}
                <LoginBar store={HomeStore} authStore={props.authStore}/>
                <BasicSearchBar/>
                <TagLine tagLine={HomeStore.tagLine}/>
            </div>
        </klatch-home-page>
    )
};
