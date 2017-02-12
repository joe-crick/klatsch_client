import React from 'react';

const homeFooter = props => {
	return (
		<div className="footer-container">
			<div className="signup-footer">
				<div className="footer">
					<ul className="footer-nav">
						<li><a className="white-link" href="/mobile" target="_blank"> Apps </a></li>
						<li><a className="white-link" href="/press" target="_blank"> Press </a></li>
						<li><a className="white-link" href="/about" target="_blank"> About </a></li>
						<li><a className="white-link" href="/support" target="_blank"> Support </a></li>
						<li><a className="white-link" href="/legal/privacy" target="_blank"> Privacy Policy </a></li>
						<li><a className="white-link" href="/legal/terms" target="_blank"> Terms and Conditions </a></li>
					</ul>
					<div className="footer-copyright"> © Klatsch 2017</div>
					<div className="footer-social">
						{/*If there ends up being some kind of social thing, put it here*/}
					</div>
				</div>
			</div>
		</div>
	);
};

homeFooter.propTypes = {};

export default homeFooter;