import React, {Component as RComponent} from 'react';
import {render} from 'react-dom';
import SearchStore from '../../stores/search-store';
import KlatchHomeView from './klatch-home-view';

const KlatchHomeFactory = function({React}) {

    return function KlatchHome(props) {

        const navVals = [
            {
                "text": "Sign up in a flash!",
                "img": ""
            }, {
                "text": "Find a group you can trust",
                "img": ""
            }, {
                "text": "Go mobile!",
                "img": ""
            }
        ];

        return {
            render() {
                return KlatchHomeView(navVals);
            }
        }

    }
}

export default KlatchHomeFactory;
