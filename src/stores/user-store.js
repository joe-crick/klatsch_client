import Global from './global-store';

let UserStore = {
  userNameLabel: 'User name',
  genderLabel: 'Gender',
  genderSelectLabel: 'I am a',
  ageLabel: 'Age',
  zipCodeText: Global.zipCodeText,
  profileText: 'Profile',
  profile: {
    nickname: 'test-user',
    picture: 'http://hilobrow.com/wp-content/uploads/2009/05/channing-550.jpg'
  },
  zipCode: '8811',
  children: [],
  Age: 0,
  genderOptions: [
    {className: '', value: '0', label: 'Woman'},
    {className: '', value: '1', label: 'Man'},
    {className: '', value: '2', label: 'Other'}
  ]
};

/**
 * dropDownAction
 * @param  {[type]} function dropDownAction(option [description]
 */
UserStore.dropDownAction = function dropDownAction(option) {
  let selectedIndex = UserStore.genderOptions.indexOf(option);
  let selectedRange = Object.assign({}, UserStore.genderOptions[selectedIndex]);
  selectedRange.selected = !selectedRange.selected;
  UserStore.genderOptions[selectedIndex] = selectedRange;
};

export default UserStore;
