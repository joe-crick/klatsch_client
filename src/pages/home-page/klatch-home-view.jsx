import SignUpBar from './sign-up-bar/sign-up-bar';
import BottomNav from './home-bottom-nav/home-bottom-nav';
import LoginBar from './login-bar/login-bar';
import createLoginModal from './login-modal/login-modal';

export default function klatchHomeView(HomeStore) {
  let {navVals} = HomeStore;
  let LoginModal = createLoginModal(React);

  return (
    <div>
        <LoginBar store={HomeStore}/>
        <SignUpBar/>
        <BottomNav navItems={navVals}/>
        <LoginModal store={HomeStore}/>
    </div>
  );
}
