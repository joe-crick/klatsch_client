import './user-menu.sass';

export default React => (props) => (
    <klatsch-user-menu>
        <ul className="user-menu">
            <li>
                <button className="btn btn-default" onClick={props.logout}>{props.logoutText}</button>
            </li>
        </ul>
    </klatsch-user-menu>
);
