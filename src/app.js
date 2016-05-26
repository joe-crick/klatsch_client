import React, {Component as RComponent} from 'react';
import { render } from 'react-dom';
import HomePageFactory from './pages/home-page/home-page';
import './main.sass';

const HomePage = HomePageFactory({React});

if (window !== undefined) {
    window.React = React;
}

render(<HomePage />,document.getElementById('content'));
