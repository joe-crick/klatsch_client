import './user-menu.sass';

export default React => (props) => (
    <klatch-user-menu>
        <ul className="user-menu">
            <li>
                <button className="btn btn-default" onClick={props.logout}>{props.logoutText}</button>
            </li>
        </ul>
    </klatch-user-menu>
);
