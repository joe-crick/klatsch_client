import {observable, computed} from 'mobx';
import ageRange from '../enums/age-range';

class SearchStore {;
    @observable zipCodeText = '';
    @observable ageRange = ageRange.baby

    constructor(userConfig) {
      if(userConfig){
        for (let [key, value] of userConfig) {
            this[key] = value;
        }
      }
    }

}

export default SearchStore;
