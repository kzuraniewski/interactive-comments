import React from 'react';
import './ActionBtn.css';
import replyImg from '../../images/icon-reply.svg';
import editImg from '../../images/icon-edit.svg';
import deleteImg from '../../images/icon-delete.svg';
import classNames from 'classnames';

export default function ActionBtn({ theme, text, ...other }) {
	return (
		<button
			className={classNames('ActionBtn', { 'ActionBtn--danger': theme === 'delete' })}
			{...other}
		>
			<img
				src={theme === 'reply' ? replyImg : theme === 'edit' ? editImg : deleteImg}
				alt=''
				role='presentation'
			/>
			{text}
		</button>
	);
}
