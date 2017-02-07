import React from 'react';
import nav from './nav/nav';

const Nav = nav(React);

export default ({children}) => (
	<klatsch>
		<Nav />
		<main>
			{children}
		</main>
	</klatsch>
);

