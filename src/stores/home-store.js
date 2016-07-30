import {extendObservable, computed, action} from 'mobx';
import GlobalStore from './global-store';
let {emailText, passwordText, closeText, email, password, zipCodeText} = GlobalStore;

let HomeStore = {
    login : 'Login',
    emailText,
    passwordText,
    closeText,
    zipCodeText,
    ageRangeLabel: 'Age Range',
    selectTitle: 'Select Age Ranges',
    tagLine: 'Connecting Families for Friends, Playdates, and More',
    showLoginModal() {
      $('#login-modal').modal('toggle');
    }
};

/*
 * Here's where a lot of the magic occurrs.
 */
HomeStore.changeTitle = action(function changeTitle() {
  this.title = 'Blah';
  this.showLoginModal();
}).bind(HomeStore);

HomeStore.authResponse = action(function authResponse(response) {
  this.loggedIn = response;
}).bind(HomeStore);

HomeStore.dropDownAction = action(function dropDownAction(option){
  let selectedIndex = HomeStore.ageRanges.indexOf(option);
  let selectedRange = Object.assign({}, HomeStore.ageRanges[selectedIndex]);
  selectedRange.selected = !selectedRange.selected;
  HomeStore.ageRanges[selectedIndex] = selectedRange;
})

extendObservable(HomeStore, {
  title: 'Hello',
  ageRanges: [
    {className: '', value: '0', label: 'Baby 0 - 1.5 yrs'},
    {className: '', value: '1', label: 'Toddler 1.5 - 3 yrs'},
    {className: '', value: '2', label: 'Early Childhood 3 - 5 yrs'},
    {className: '', value: '3', label: 'Early Elementary 5 - 7 yrs'},
    {className: '', value: '4', label: 'Late Elementary 7 - 10 yrs'},
    {className: '', value: '5', label: 'Pre-teen 10 -12 yrs'}
  ]
});

export default HomeStore;
