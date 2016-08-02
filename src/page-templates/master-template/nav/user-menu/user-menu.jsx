export default React => (props) => {
    return (
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"
              role="button" aria-haspopup="true" aria-expanded="false">
                <div className="small-circle user-profile-avatar" title="Profile">
                    <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                </div>
                <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
                <li>
                    <a href="#">Profile</a>
                </li>
                <li>
                    <a href="#">Settings</a>
                </li>
                <li>
                    <a href="#">Help</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                    <a href="#">Sign Out</a>
                </li>
            </ul>
        </li>
    );
};
