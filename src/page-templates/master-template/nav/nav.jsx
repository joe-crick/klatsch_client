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
        <klatsch-nav>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <NavLogo/>
                    <div className="collapse navbar-collapse" id="klatsch-nav-bar">
                        <QuickLinks />
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#">Link</a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown
                                    <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#">Action</a>
                                    </li>
                                    <li>
                                        <a href="#">Another action</a>
                                    </li>
                                    <li>
                                        <a href="#">Something else here</a>
                                    </li>
                                    <li role="separator" className="divider"></li>
                                    <li>
                                        <a href="#">Separated link</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </klatsch-nav>
    )
};
