import React, {Component} from 'react';
import UserStore from '../../stores/user-store';
import {browse, joinKlatch} from '../../stores/global-store';
import userBarFactory from '../../components/user-bar/user-bar';
import menuBarFactory from '../../components/menu-bar/menu-bar';
import './dashboard.sass';

let UserBar = userBarFactory(React);
let MenuBar = menuBarFactory(React);

class KlatchDashboard extends Component {

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
          <klatch-dashboard>
            <MenuBar browse={browse} joinKlatch={joinKlatch}/>
            <UserBar userStore={UserStore} authStore={this.props.authStore}/>
          </klatch-dashboard>
        );
    }
}
export default KlatchDashboard;
