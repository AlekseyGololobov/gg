import React from "react";
import bg_anim_1 from './assets/bg_anim_1.png';
import bg_anim_2 from './assets/bg_anim_2.png';

// import './assets/bgCr.scss'

export const BgCircleAnim = React.memo(() => {
	return (
		<div className='box'>
			 <img src={bg_anim_1} className="bg_anim_1" />
			 <img src={bg_anim_2} className="bg_anim_2" />
        </div>
	);
});