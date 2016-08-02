import {observer} from 'mobx-react';
import userMenu from '../user-menu/user-menu';

export default React => observer((props) => {
    const UserMenu = userMenu(React);

    return (
        <klatsch-right-nav>
            <ul className="nav navbar-nav navbar-right">
              <li>
                  <a href="#" title="Visitors">
                      <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                  </a>
              </li>
                <li>
                    <a href="#" title="Messages">
                        <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
                    </a>
                </li>
                <li>
                    <a href="#" title="Favorites">
                        <span className="glyphicon glyphicon-pushpin" aria-hidden="true"></span>
                    </a>
                </li>
                <UserMenu/>
            </ul>
        </klatsch-right-nav>
    );
});
