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
	zipCode: '8811-test',
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
