import React, { useState } from 'react';
import Avatar from './Avatar';
import './TextInput.css';
import Btn from './Btn';
import Textarea from './Textarea';

export default function TextInput({ img, placeholder = '', initialValue = '' }) {
	const [value, setValue] = useState(initialValue);

	return (
		<div className='TextInput'>
			<Textarea placeholder={placeholder} value={value} setValue={setValue} />

			<Avatar src={img} />

			<Btn text='SEND' />
		</div>
	);
}
