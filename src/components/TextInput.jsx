import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Avatar from './Avatar';
import './TextInput.css';
import Btn from './Btn';

export default function TextInput({ img, placeholder = '' }) {
	const [value, setValue] = useState('');

	return (
		<div className='TextInput'>
			<TextareaAutosize
				className='TextInput__textarea'
				name='comment'
				placeholder={placeholder}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			></TextareaAutosize>

			<Avatar src={img} />

			<Btn text='SEND' />
		</div>
	);
}
