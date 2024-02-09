import React from 'react';
import './Btn.css';
import classNames from 'classnames';

// TODO: Rename to Button

export type BtnTheme = 'normal' | 'danger' | 'cancel';

export type BtnProps = JSX.IntrinsicElements['button'] & {
	text: string;
	theme?: BtnTheme;
};

export default function Btn({ text, theme = 'normal', ...other }: BtnProps) {
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
