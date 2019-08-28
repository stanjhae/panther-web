import React from 'react';
import './footer.styles.css';

const Footer = () => (
	<div className='footerContainer'>
		<p className='copyright'>&copy; NSAD 2019</p>
		<div className='emailAddressContainer'>
			<p className='contactText'>Contact:</p>
			<div>
				<p>
					<a
						className="link"
						href="mailto:ceejayorji@yahoo.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						ceejayorji@yahoo.com
					</a>
				</p>
				<p><a
					className="link"
					href="mailto:woyongegbara@yahoo.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					woyongegbara@yahoo.com
				</a></p>
			</div>
			</div>
	</div>
);

export default Footer;
