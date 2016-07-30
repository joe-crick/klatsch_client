import {observer} from 'mobx-react';

export default React => observer((props) => {
    return (
        <klatsch-activity-links>
            <ul className="nav-notifications nav-item">
                <li id="nav_visitors" className="nav-notifications-item visitors  ">
                    <a href="/visitors">
                        <span className="glyph" aria-hidden="true">
                            <i className="okicon i-visitors"></i>
                        </span>
                        <span className="text">
                            Visitors
                        </span>
                    </a>
                </li>
                <li id="nav_ratings" className="nav-notifications-item likes  ">
                    <a href="/who-likes-you">
                        <span className="glyph" aria-hidden="true">
                            <i className="okicon i-likes"></i>
                        </span>
                        <span className="text">
                            Likes
                        </span>
                    </a>
                </li>
                <li id="nav_mailbox" className="nav-notifications-item messages nav-notifications--priority ">
                    <a href="/messages">
                        <span className="glyph" aria-hidden="true">
                            <i className="okicon i-messages"></i>
                        </span>
                        <span className="text">
                            Messages
                        </span>
                    </a>
                </li>
            </ul>
        </klatsch-activity-links>
    );
});
