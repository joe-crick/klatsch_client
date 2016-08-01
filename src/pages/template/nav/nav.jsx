import userMenu from './user-menu/user-menu';
import navLogo from './nav-logo/nav-logo';
import quickLinks from './quick-links/quick-links';
import activityLinks from './activity-links/activity-links';
import templateStore from '../../../stores/template-store';

export default React => (props) => {
    const QuickLinks = quickLinks(React);
    const ActivityLinks = activityLinks(React);
    const UserMenu = userMenu(React);
    const NavLogo = navLogo(React);
    const {browseMatches, visitors, messages} = templateStore;

    return (
        <nav id="navigation" className="fixed">
            <div className="nav-left">
                <NavLogo/>
                <QuickLinks browseMatches={browseMatches}/>
            </div>
            <div className="nav-right">
                <ActivityLinks visitors={visitors} messages={messages}/>
                <UserMenu/>
            </div>
        </nav>
    );
};
