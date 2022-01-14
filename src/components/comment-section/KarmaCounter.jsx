import React from 'react';
import './KarmaCounter.css';
import plusIcon from '../../images/icon-plus.svg';
import minusIcon from '../../images/icon-minus.svg';

function Btn({ src, ...other }) {
	return (
		<button className='KarmaCounter__btn' {...other}>
			<img src={src} alt='' role='presentation' />
		</button>
	);
}

//TODO: proper liking/disliking

export default function KarmaCounter({ karma = 0 }) {
	return (
		<div className='KarmaCounter'>
			<Btn src={plusIcon} />

			<div className='KarmaCounter__counter'>{karma}</div>

			<Btn src={minusIcon} />
		</div>
	);
}
