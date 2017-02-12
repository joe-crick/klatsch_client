import React from 'react';

const homeFooter = props => {
	return (
		<div className="footer-container">
			<div className="container signup-footer">
				<div className="row footer">
					<div className="col"><a className="white-link" href="/press" target="_blank"> Press </a></div>
					<div className="col"><a className="white-link" href="/about" target="_blank"> About </a></div>
					<div className="col"><a className="white-link" href="/support" target="_blank"> Support </a></div>
					<div className="col"><a className="white-link" href="/legal/privacy" target="_blank"> Privacy </a></div>
					<div className="col"><a className="white-link" href="/legal/t-and-c" target="_blank"> Terms </a></div>
				</div>
				<div className="row">
					<div className="col footer-copyright">
						© Klatsch 2017
						<div className="footer-social">
							{/*If there ends up being some kind of social thing, put it here*/}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

homeFooter.propTypes = {};

export default homeFooter;