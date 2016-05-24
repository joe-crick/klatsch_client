import React from 'react';
import './login-bar.sass';

const login_bar = (props) => {
    return (
        <klatch-login-bar>
            <div>
                <button className='btn btn-default' onClick={event => this.setState({currentPage: 'login'})}>
                    {props.loginButton}
                </button>
            </div>
        </klatch-login-bar>
    );
};

export default login_bar;
