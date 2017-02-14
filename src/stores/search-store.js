import ageRange from '../enums/age-range';

export default class SearchStore {
  zipCodeText = '';
  ageRange = ageRange.baby;

  constructor(userConfig) {
    if (userConfig) {
      for (let [key, value] of userConfig) {
        this[key] = value;
      }
    }
  }

}
