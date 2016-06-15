import {extendObservable,action} from 'mobx';

let UserStore = {};

extendObservable(UserStore, {
    profile: {},
    zipCodeText: '',
    children: []
});

/**
 * setProfile - Gets the base user profile from Auth0
 *
 * @param  {Object} lock    The Auth0 lock
 * @param  {Object} idToken The Auth0 idToken
 */
UserStore.setProfile = action(function setProfile(lock, idToken) {
    lock.getProfile(idToken, function setProfileError(err, profile) {
        if (err) {
            console.log("Error loading the Profile", err);
            return;
        }
        UserStore.profile = profile;
    });
});

export default UserStore;
