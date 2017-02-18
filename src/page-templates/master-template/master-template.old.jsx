import React from 'react';
import Nav from './nav/nav';
import PageFooter from '../../components/page-footer/page-footer';
import Chat from '../../components/chat/chat';

export default ({children}) => (
	<klatsch-master>
		<Nav />
		<main>
			{children}
		</main>
		<PageFooter/>
		<div className="hidden" id="chat-container">
        <Chat/>
		</div>
	</klatsch-master>
);

