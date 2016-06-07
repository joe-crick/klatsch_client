import {extendObservable,action} from 'mobx';

let UserStore = {};

extendObservable(UserStore, {
    profile: {}
});

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
