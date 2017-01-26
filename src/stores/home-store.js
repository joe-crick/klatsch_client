import GlobalStore from './global-store';
let {emailText, passwordText, closeText, zipCodeText} = GlobalStore;

let HomeStore = {
    login : 'Login',
    emailText,
    passwordText,
    closeText,
    zipCodeText,
    ageRangeLabel: 'Age Range',
    selectTitle: 'Select Age Ranges',
    tagLine: 'Connecting Families for Friends, Playdates, and More',
	title: 'Hello',
	ageRanges: [
		{className: '', value: '0', label: 'Baby 0 - 1.5 yrs'},
		{className: '', value: '1', label: 'Toddler 1.5 - 3 yrs'},
		{className: '', value: '2', label: 'Early Childhood 3 - 5 yrs'},
		{className: '', value: '3', label: 'Early Elementary 5 - 7 yrs'},
		{className: '', value: '4', label: 'Late Elementary 7 - 10 yrs'},
		{className: '', value: '5', label: 'Pre-teen 10 -12 yrs'}
	],
    showLoginModal() {
      $('#login-modal').modal('toggle');
    }
};

HomeStore.dropDownAction = function dropDownAction(option){
  let selectedIndex = HomeStore.ageRanges.indexOf(option);
  let selectedRange = Object.assign({}, HomeStore.ageRanges[selectedIndex]);
  selectedRange.selected = !selectedRange.selected;
  HomeStore.ageRanges[selectedIndex] = selectedRange;
};

export default HomeStore;
