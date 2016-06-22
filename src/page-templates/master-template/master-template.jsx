import React, {Component} from 'react';
import UserStore from '../../stores/user-store';
import {browse, joinklatsch} from '../../stores/global-store';
import userBarFactory from '../../components/user-bar/user-bar';
import menuBarFactory from '../../components/menu-bar/menu-bar';
import './dashboard.sass';

let UserBar = userBarFactory(React);
let MenuBar = menuBarFactory(React);

class masterTemplate extends Component {

    /**
     * componentDidMount - Runs after the component has mounted
     */
    componentDidMount() {
        UserStore.setProfile(this.props.authStore.lock, this.props.authStore.idToken);
    }

    render() {
        return (
          <klatsch>
            <MenuBar browse={browse} joinklatsch={joinklatsch}/>
            <UserBar userStore={UserStore} authStore={this.props.authStore}/>
            {this.props.children}
          </klatsch>
        );
    }
}
export default masterTemplate;
