import {observer} from 'mobx-react';

export default React => observer((props) => {
    let showModal = props.store.showLoginModal.bind(props.store);
    let loginTitle = props.store.title === 'Hello' ? 'Login' : 'Logged In';

    return (
        <klatsch-login-bar>
            <div>
                <button className='btn btn-default' onClick={props.authStore.showLock}>
                    {loginTitle}
                </button>
            </div>
        </klatsch-login-bar>
    );
});
