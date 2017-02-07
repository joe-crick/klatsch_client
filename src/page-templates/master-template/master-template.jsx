import React from 'react';
import Nav from './nav/nav';

export default ({children}) => (
	<klatsch>
		<Nav />
		<main>
			{children}
		</main>
	</klatsch>
);

