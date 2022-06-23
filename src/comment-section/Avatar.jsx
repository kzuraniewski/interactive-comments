import React from 'react';
import './Avatar.css';

export default function Avatar({ src, href = '' }) {
	return (
		<a href={href} className='Avatar'>
			<img src={src} alt='avatar' className='Avatar__img' />
		</a>
	);
}
