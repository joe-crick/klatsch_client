import React from 'react';
import './home-bottom-nav.sass';

const home_bottom_nav = (props) => {

    let keyValue = 0;
    const navItems = props.navItems.map((item) => {
        let key = 'bnav_' + keyValue.toString();
        keyValue++;
        return <li key={key}>
            <div><img src={item.img}/></div>
            <div>{item.text}</div>
        </li>;
    });

    return (
        <klatch-home-bottom-nav>
            <ul className="col-md-10 list-group">
                {navItems}
            </ul>
        </klatch-home-bottom-nav>
    );
};

export default home_bottom_nav;