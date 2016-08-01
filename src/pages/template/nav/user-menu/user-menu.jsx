
export default React => (props) => {
    return (
      <klatsch-user-menu>
        <div className="nav-user">
            <a href="/profile" className="nav-user-image">
                <span className="text">show user menu</span>
                <span className="nav-user-image-thumb">
                    <img src="" alt="cupid0cpuid" /></span>
                </a>
                <ul className="nav-user-menu nav-menu">
                    <li className=" profile">
                        <a href="/profile" className="nav-user-menu-item">
                            Profile
                        </a>
                    </li>
                    <li className=" bookmarks">
                        <a href="/bookmarks" className="nav-user-menu-item">
                            Bookmarks
                        </a>
                    </li>
                    <li className=" find-a-user">
                        <a href="/find-a-user" className="nav-user-menu-item">
                            Find a user
                        </a>
                    </li>
                    <li className=" settings">
                        <a href="/settings" className="nav-user-menu-item">
                            Settings
                        </a>
                    </li>
                    <li className=" help">
                        <a href="/help" target="_blank" className="nav-user-menu-item">
                            Help
                        </a>
                    </li>
                    <li className=" sign-out">
                        <a href="/logout" className="nav-user-menu-item">
                            Sign Out
                        </a>
                    </li>
                    <li className="upgrade join-alist">
                        <a href="https://www.okcupid.com/upgrade?cf=usernav" className="nav-user-menu-item">
                            Join A-List
                        </a>
                    </li>
                </ul>
            </div>
            <div className="nav-addphoto">
                <button className="teal flatbutton nav-addphoto-button">
                    Add photo
                </button>
            </div>
      </klatsch-user-menu>
    );
};
