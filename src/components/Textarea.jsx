import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './Textarea.css';

export default function Textarea({ content = '', ...other }) {
	const [value, setValue] = useState(content);

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
