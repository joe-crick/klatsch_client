import {observer} from 'mobx-react';

export default React => observer((props) => {
    return (
        <klatsch-activity-links>
            <ul className="nav navbar-nav">
                <li id="nav_visitors" className="nav-notifications-item visitors  ">
                    <a href="/visitors">
                        <span className="glyph" aria-hidden="true">
                            <i className="i-visitors"></i>
                        </span>
                        <span className="text">
                            {props.visitors}
                        </span>
                    </a>
                </li>
                <li id="nav_mailbox" className="nav-notifications-item messages nav-notifications--priority ">
                    <a href="/messages">
                        <span className="glyph" aria-hidden="true">
                            <i className="i-messages"></i>
                        </span>
                        <span className="text">
                            {props.messages}
                        </span>
                    </a>
                </li>
            </ul>
        </klatsch-activity-links>
    );
});
