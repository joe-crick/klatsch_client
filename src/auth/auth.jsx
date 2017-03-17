import Auth0Lock from 'auth0-lock'
import { browserHistory } from 'react-router'

const {} = React.PropTypes;

function Auth(clientId, domain) {

    Auth.propTypes = {};

    const lock = new Auth0Lock(clientId, domain, {
        auth: {
            redirectUrl: 'http://localhost:3000/login',
            responseType: 'token'
        }
    });

    // Add callback for lock `authenticated` event
    lock.on('authenticated', this._doAuthentication.bind(this));
    // binds login functions to keep this context
    const login = this.login.bind(this);

    return {

        props,

        _doAuthentication(authResult) {
            // Saves the user token
            this.setToken(authResult.idToken);
            // navigate to the home route
            browserHistory.replace('/home')
        },

        login() {
            // Call the show method to display the widget.
            this.lock.show();
        },

        loggedIn() {
            // Checks if there is a saved token and it's still valid
            return !!this.getToken();
        },

        setToken(idToken) {
            // Saves user token to local storage
            localStorage.setItem('id_token', idToken);
        },

        getToken() {
            // Retrieves the user token from local storage
            return localStorage.getItem('id_token');
        },

        logout() {
            // Clear user token and profile data from local storage
            localStorage.removeItem('id_token');
        }
    };

}