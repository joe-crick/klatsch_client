import {observer} from 'mobx-react';
import userMenu from '../user-menu/user-menu';

export default React => observer((props) => {
    const UserMenu = userMenu(React);

    return (
        <klatsch-right-nav>
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a href="#">Link</a>
                </li>
                <UserMenu/>
            </ul>
        </klatsch-right-nav>
    );
});
