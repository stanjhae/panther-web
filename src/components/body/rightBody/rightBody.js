import React from 'react';
import './rightBody.styles.css';
import googlePlay from '../../../assets/googlePlayImage.png';
import appStore from '../../../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';

const RightBody = () => (
	<div className='rightBodyContainer'>
		<h1>Download the NSAD app</h1>
		<p className='subText'>View upcoming events</p>
		<p> keep up with the Nigerian community</p>
		<div className='storeLinksContainer'>
			<img alt="app store" src={appStore} className='storeImage'/>
			<img alt="play store" src={googlePlay} className='storeImage'/>
		</div>
	</div>
);

export default RightBody;
