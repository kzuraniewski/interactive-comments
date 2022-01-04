import React from 'react';
import './Actions.css';
import ActionBtn from './ActionBtn';

export default function Actions({ reply = false, edit = false, delete: del = false }) {
	return (
		<div className='Actions'>
			{del && <ActionBtn theme='delete' text='Delete' />}
			{edit && <ActionBtn theme='edit' text='Edit' />}
			{reply && <ActionBtn theme='reply' text='Reply' />}
		</div>
	);
}
