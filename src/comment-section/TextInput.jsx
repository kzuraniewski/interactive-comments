import React from 'react';
import Avatar from './Avatar';
import './TextInput.css';
import Btn from './Btn';
import Textarea from './Textarea';

export default function TextInput({ img, placeholder = '' }) {
	return (
		<div className='TextInput'>
			<Textarea placeholder={placeholder} />

			<Avatar src={img} />

			<Btn text='SEND' />
		</div>
	);
}
