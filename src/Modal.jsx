import React from 'react';
import Btn from './comment-section/Btn';
import './Modal.css';

export default function Modal({ title, description = '', cancel = 'CANCEL', confirm = 'CONFIRM' }) {
	return (
		<div className='Modal'>
			<h1 className='Modal__title'>{title}</h1>

			{description && <p className='Modal__description'>{description}</p>}

			<div className='Modal__actions'>
				<Btn text={cancel} theme='cancel' />

				<Btn text={confirm} theme='danger' />
			</div>
		</div>
	);
}
