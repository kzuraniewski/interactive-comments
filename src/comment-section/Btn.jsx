import React from 'react';
import './Btn.css';

export default function Btn({ text, ...other }) {
	return (
		<button className='Btn' {...other}>
			{text}
		</button>
	);
}
