import React from 'react';
import Nav from './nav/nav';
import PageFooter from '../../components/page-footer/page-footer';

export default ({children}) => (
	<klatsch>
		<Nav />
		<main>
			{children}
		</main>
		<PageFooter/>
	</klatsch>
);

