import {observable, computed} from 'mobx';
import ageRange from '../enums/age-range';

class UserStore {
    @observable firstName = '';
    @observable lastName = '';
    @observable email = '';
    @observable zipCode = '';
    @observable ageRange = ageRange.baby

    constructor(userConfig) {
        for (let [key, value] of userConfig) {
            this[key] = value;
        }
    }

}

export default new UserStore();
