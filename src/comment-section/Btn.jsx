import React from 'react';
import './Btn.css';
import classNames from 'classnames';

export default function Btn({ text, theme = 'normal', ...other }) {
	return (
		<button
			className={classNames('Btn', {
				'Btn--danger': theme === 'danger',
				'Btn--cancel': theme === 'cancel',
			})}
			{...other}
		>
			{text}
		</button>
	);
}
