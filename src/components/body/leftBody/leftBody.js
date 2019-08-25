import React from 'react';
import './leftBody.styles.css';
import ios from '../../../assets/ios.png';
import android from '../../../assets/android.png';

const LeftBody = () => (
	<div className='leftBodyContainer'>
		<img className='iosImage' src={ios} />
		<img className='androidImage' src={android} />
	</div>
);

export default LeftBody;
