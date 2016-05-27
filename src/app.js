import React from 'react';
import { render } from 'react-dom';
import HomePage from './pages/home-page/home-page';
import './main.sass';

// Put React on the window for React tools
if (window !== undefined) {
    window.React = React;
}

render(<HomePage />,document.getElementById('content'));
