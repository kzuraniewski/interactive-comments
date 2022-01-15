import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './Textarea.css';

export default function Textarea({ content = '', value, setValue, ...other }) {
	return (
		<TextareaAutosize
			className='Textarea'
			name='user-text'
			value={value}
			onChange={(e) => setValue(e.target.value)}
			{...other}
		/>
	);
}
