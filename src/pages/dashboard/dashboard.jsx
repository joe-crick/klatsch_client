import React, {Component} from 'react';
import UserStore from '../../stores/user-store';
import globalStore from '../../stores/global-store';
import userBarFactory from '../../components/user-bar/user-bar';
import menuBarFactory from '../../components/menu-bar/menu-bar';
import './dashboard.sass';

const UserBar = userBarFactory(React);
const MenuBar = menuBarFactory(React);
const {browse, joinKlatsch} = globalStore;

export default React => (props) => {
	return (
		<klatsch-dashboard>
			<MenuBar browse={browse} joinKlatsch={joinKlatsch}/>
			<UserBar userStore={UserStore} authStore={props.authStore}/>
		</klatsch-dashboard>
	);
};
