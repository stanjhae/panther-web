import React from 'react';
import './footer.styles.css';

const Footer = () => (
	<div className='footerContainer'>
		<p className='copyright'>&copy; NSAD 2019</p>
		<a
			className="link"
			href="mailto:ceejayorji@yahoo.com"
			target="_blank"
			rel="noopener noreferrer"
		>
			Contact: ceejayorji@yahoo.com
		</a>	</div>
);

export default Footer;
