import SignUpBar from '../../components/sign-up-bar/sign-up-bar';
import BottomNav from '../../components/home-bottom-nav/home-bottom-nav';
import LoginBar from '../../components/login-bar/login-bar';

export default function klatchHomeView(navVals) {
  return (
    <div>
        <LoginBar loginButton='Login'/>
        <SignUpBar/>
        <BottomNav navItems={navVals}/>
    </div>
  );
}
