import React from 'react';
import './login-bar.sass';

export default (props) => {
    return (
        <klatch-login-bar>
            <div>
                <button className='btn btn-default' onClick={props.sayHello}>
                    {props.loginButton}
                </button>
            </div>
        </klatch-login-bar>
    );
};
