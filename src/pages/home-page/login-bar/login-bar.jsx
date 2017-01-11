import {observer} from 'mobx-react';

export default React => observer((props) => {
    let loginTitle = props.store.title === 'Hello' ? 'Login' : 'Logged In';

    return (
        <klatsch-login-bar>
            <div className="pull-right">
                <button className='btn btn-default' onClick={props.authStore.setIdToken}>
                    {loginTitle}
                </button>
            </div>
            <div className="clearfix"></div>
        </klatsch-login-bar>
    );
});
