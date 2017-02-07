import React from 'react';

export default props => {

    return (
        <klatsch-login-bar>
            <div className="pull-right">
                <button className='btn btn-default' onClick={props.logUserIn}>
				{props.loginButtonText}
                </button>
            </div>
            <div className="clearfix"></div>
        </klatsch-login-bar>
    );
};
