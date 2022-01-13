import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Avatar from './Avatar';
import './TextInput.css';
import Btn from './Btn';

export default function TextInput({ img, placeholder = '' }) {
	return (
		<div className='TextInput'>
			<TextareaAutosize
				className='TextInput__textarea'
				name='comment'
				placeholder={placeholder}
			></TextareaAutosize>

			<Avatar src={img} />

			<Btn text='SEND' />
		</div>
	);
}
