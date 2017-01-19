import navLogo from './nav-logo/nav-logo';
import quickLinks from './quick-links/quick-links';
import rightNav from './right-nav/right-nav';

export default React => (props) => {
    const QuickLinks = quickLinks(React);
    const RightNav = rightNav(React);
    const NavLogo = navLogo(React);

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
