import React from 'react';
import Btn from './comment-section/Btn';
import './Modal.css';

export default function Modal({ isOpen, title, description = '', cancel = 'CANCEL', confirm = 'CONFIRM', onConfirm, onCancel }) {
	return (
		<div className='Modal' style={{ display: isOpen ? '' : 'none' }} onClick={onCancel}>
			<div className='Modal__content' onClick={e => e.stopPropagation()}>
				<h1 className='Modal__title'>{title}</h1>

				{description && <p className='Modal__description'>{description}</p>}

				<div className='Modal__actions'>
					<Btn text={cancel} theme='cancel' />

					<Btn text={confirm} theme='danger' onClick={onConfirm} />
				</div>
			</div>
		</div>
	);
}
