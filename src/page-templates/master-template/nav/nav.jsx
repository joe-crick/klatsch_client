import navLogo from './nav-logo/nav-logo';
import quickLinks from './quick-links/quick-links';
import rightNav from './right-nav/right-nav';
import templateStore from '../../../stores/template-store';

export default React => (props) => {
    const QuickLinks = quickLinks(React);
    const RightNav = rightNav(React);
    const NavLogo = navLogo(React);
    const {browseMatches, visitors, messages} = templateStore;

    return (
        <klatsch-nav>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <NavLogo/>
                    <div className="collapse navbar-collapse" id="klatsch-nav-bar">
                        <QuickLinks />
                        <RightNav />
                    </div>
                </div>
            </nav>
        </klatsch-nav>
    )
};
