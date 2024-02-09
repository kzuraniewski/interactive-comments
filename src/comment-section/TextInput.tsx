import React, { useEffect, useState } from 'react';
import Avatar from './Avatar';
import './TextInput.css';
import Btn from './Btn';
import Textarea from './Textarea';

export type TextInputProps = {
	img: string;
	placeholder?: string;
	initialValue?: string;
	focus?: boolean;
	onSend?: () => void;
};

export default function TextInput({
	img,
	placeholder = '',
	initialValue = '',
	focus = false,
	onSend,
}: TextInputProps) {
	const [value, setValue] = useState('');

	// Add initial value after mount so when focused, the cursor is at the end of the line
	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	const handleSend = () => {
		if (!value.length) return;
		onSend?.();
	};

	return (
		<div className='TextInput'>
			<Textarea
				placeholder={placeholder}
				value={value}
				setValue={setValue}
				autoFocus={focus}
			/>

			<Avatar src={img} />

			<Btn text='SEND' onClick={handleSend} />
		</div>
	);
}
