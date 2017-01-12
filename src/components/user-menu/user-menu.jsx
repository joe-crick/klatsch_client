export default React => (props) => (
    <klatsch-user-menu>
        <ul className="user-menu">
            <li>
                <a href="/profile">{props.profileText}</a>
            </li>
            <li>
                <button className="btn btn-link" onClick={props.logout}>{props.logoutText}</button>
            </li>
        </ul>
    </klatsch-user-menu>
);
