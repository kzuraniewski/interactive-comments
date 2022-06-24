import React, { useEffect, useState } from 'react';
import Avatar from './Avatar';
import './TextInput.css';
import Btn from './Btn';
import Textarea from './Textarea';

export default function TextInput({
	img,
	onSend,
	placeholder = '',
	initialValue = '',
	focus = false,
}) {
	const [value, setValue] = useState('');

	// Add initial value after mount so when focused, the cursor is at the end of the line
	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	return (
		<div className='TextInput'>
			<Textarea
				placeholder={placeholder}
				value={value}
				setValue={setValue}
				autoFocus={focus}
			/>

			<Avatar src={img} />

			<Btn text='SEND' onClick={onSend} />
		</div>
	);
}
