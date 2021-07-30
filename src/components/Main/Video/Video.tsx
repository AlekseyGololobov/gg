import React from "react";

// @ts-ignore
import Vid from './assets/AdvanceLoadVideo.mp4';
// @ts-ignore
import Mus from './assets/AdvanceLoadMusic.mp3'
import './assets/vide.scss'




export const Video: React.FC = React.memo(() => {
	
	const url = window.location.href;
	console.log(url)
	
	
	if (url) {
		console.log(document.body)
	}
	
	return (
	<div className='wat'>
	<video autoPlay loop muted className='vide' >
		<source src={Vid}/>
	</video >
	<audio autoPlay loop muted>
		<source src={Mus}/>
	</audio>
	</div>
	);
})