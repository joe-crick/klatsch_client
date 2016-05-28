import SignUpBar from './sign-up-bar/sign-up-bar';
import BottomNav from './home-bottom-nav/home-bottom-nav';
import LoginBar from './login-bar/login-bar';

export default function klatchHomeView(HomeStore) {
  let {navVals, sayHello, loginButton} = HomeStore;

  return (
    <div>
        <LoginBar sayHello={sayHello} loginButton={loginButton}/>
        <SignUpBar/>
        <BottomNav navItems={navVals}/>
    </div>
  );
}
