import React, { useState } from 'react';
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

export default function KarmaCounter({ karma: initialKarma = 0 }) {
	const [karma, setKarma] = useState(initialKarma);

	return (
		<div className='KarmaCounter'>
			<Btn src={plusIcon} onClick={() => setKarma((karma) => karma + 1)} />

			<div className='KarmaCounter__counter'>{karma}</div>

			<Btn src={minusIcon} onClick={() => setKarma((karma) => karma - 1)} />
		</div>
	);
}
