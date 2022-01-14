import React from 'react';
import './Actions.css';
import ActionBtn from './ActionBtn';

export default function Actions({ reply = null, edit = null, delete: del = null }) {
	return (
		<div className='Actions'>
			{del && <ActionBtn theme='delete' text='Delete' onClick={del} />}
			{edit && <ActionBtn theme='edit' text='Edit' onClick={edit} />}
			{reply && <ActionBtn theme='reply' text='Reply' onClick={reply} />}
		</div>
	);
}
