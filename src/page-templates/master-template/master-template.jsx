import React from 'react';
import Draggable from 'react-draggable';
import Nav from './nav/nav';
import PageFooter from '../../components/page-footer/page-footer';
import Chat from '../../components/chat/chat';

export default ({children}) => (
	<klatsch>
		<Nav />
		<main>
			{children}
		</main>
		<PageFooter/>
		<div className="hidden" id="chat-container">
      <Draggable>
        <Chat/>
      </Draggable>
		</div>
	</klatsch>
);

