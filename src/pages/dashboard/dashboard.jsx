import React, {Component} from 'react';
import UserStore from '../../stores/user-store';
import {browse, joinklatsch} from '../../stores/global-store';
import userBarFactory from '../../components/user-bar/user-bar';
import menuBarFactory from '../../components/menu-bar/menu-bar';
import './dashboard.sass';

let UserBar = userBarFactory(React);
let MenuBar = menuBarFactory(React);

class klatschDashboard extends Component {

    /**
     * [componentDidMount description]
     * @return {[type]} [description]
     */
    componentDidMount() {
        UserStore.setProfile(this.props.authStore.lock, this.props.authStore.idToken);
    }

    /**
     * [render description]
     * @return {[type]} [description]
     */
    render() {
        return (
          <klatsch-dashboard>
            <MenuBar browse={browse} joinklatsch={joinklatsch}/>
            <UserBar userStore={UserStore} authStore={this.props.authStore}/>
          </klatsch-dashboard>
        );
    }
}
export default klatschDashboard;
