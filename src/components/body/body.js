import React from 'react';
import './body.styles.css';
import LeftBody from './leftBody/leftBody';
import RightBody from './rightBody/rightBody';

const Body = () => (
	<div className='bodyContainer'>
		<LeftBody/>
		<RightBody/>
	</div>
);

export default Body;
