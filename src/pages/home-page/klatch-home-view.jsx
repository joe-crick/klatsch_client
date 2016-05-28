import SignUpBar from './sign-up-bar/sign-up-bar';
import BottomNav from './home-bottom-nav/home-bottom-nav';
import LoginBar from './login-bar/login-bar';
import createLoginModal from './login-modal/login-modal';

export default function klatchHomeView(HomeStore) {
  let {navVals, sayHello, login} = HomeStore;
  let LoginModal = createLoginModal(React);

  return (
    <div>
        <LoginBar sayHello={sayHello} loginButton={login}/>
        <SignUpBar/>
        <BottomNav navItems={navVals}/>
        <LoginModal modalTitle={login}/>
    </div>
  );
}
