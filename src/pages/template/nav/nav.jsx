import quickLinks from './quick-links/quick-links';
import activityLinks from './activity-links/activity-links';
import userMenu from './user-menu/user-menu';
import navLogo from './nav-logo/nav-logo';

export default React => observer((props) => {
    const QuickLinks = quickLinks(React);
    const ActivityLinks = activityLinks(React);
    const UserMenu = userMenu(React);
    const NavLogo = navLogo(React);

    return (
        <nav id="navigation" className="fixed">
            <div className="nav-left">
                <NavLogo/>
                <QuickLinks/>
            </div>
            <div className="nav-right ">
                <ActivityLinks/>
                <UserMenu/>
            </div>
        </nav>
    );
});
