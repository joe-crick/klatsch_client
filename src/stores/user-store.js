import {extendObservable,action} from 'mobx';
import moment from 'moment';
import Global from './global-store';

let UserStore = {
  userNameLabel: 'User name',
  genderLabel: 'Gender',
  genderSelectLabel: 'I am a',
  ageLabel: 'Age',
  zipCodeText: Global.zipCodeText
};

extendObservable(UserStore, {
    profile: {},
    zipCode: '',
    children: [],
    Age: 0,
    genderOptions: [
      {className: '', value: '0', label: 'Woman'},
      {className: '', value: '1', label: 'Man'},
      {className: '', value: '2', label: 'Agender'},
      {className: '', value: '3', label: 'Androgynous'},
      {className: '', value: '4', label: 'Bigender'},
      {className: '', value: '5', label: 'Cis Man'},
      {className: '', value: '6', label: 'Cis Woman'},
      {className: '', value: '7', label: 'Genderfluid'},
      {className: '', value: '8', label: 'Genderqueer'},
      {className: '', value: '9', label: 'Gender nonconforming'},
      {className: '', value: '10', label: 'Hijra'},
      {className: '', value: '11', label: 'Intersex'},
      {className: '', value: '12', label: 'Non-binary'},
      {className: '', value: '13', label: 'Pangender'},
      {className: '', value: '14', label: 'Transfeminine'},
      {className: '', value: '15', label: 'Transgender'},
      {className: '', value: '16', label: 'Transmasculine'},
      {className: '', value: '17', label: 'Transsexual'},
      {className: '', value: '18', label: 'Two spirit'},
      {className: '', value: '19', label: 'Other'}
    ]
});

/**
 * dropDownAction
 * @param  {[type]} function dropDownAction(option [description]
 */
UserStore.dropDownAction = action(function dropDownAction(option){
  let selectedIndex = UserStore.genderOptions.indexOf(option);
  let selectedRange = Object.assign({}, UserStore.genderOptions[selectedIndex]);
  selectedRange.selected = !selectedRange.selected;
  UserStore.genderOptions[selectedIndex] = selectedRange;
});

export default UserStore;
