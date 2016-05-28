import React from 'react';
import './login-bar.sass';

export default (props) => {
  let showModal = props.store.showLoginModal.bind(props.store);
    return (
        <klatch-login-bar>
            <div>
                <button className='btn btn-default' onClick={showModal}>
                    {props.store.login}
                </button>
            </div>
        </klatch-login-bar>
    );
};
