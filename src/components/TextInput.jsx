import React, { useRef, useEffect } from 'react';
import Avatar from './Avatar';
import './TextInput.css';
import Btn from './Btn';
import autosize from 'autosize';

export default function TextInput({ img, placeholder = '' }) {
	const ref = useRef(null);

	useEffect(() => {
		autosize(ref.current);
	}, [ref]);

	return (
		<div className='TextInput'>
			<textarea
				ref={ref}
				className='TextInput__textarea'
				name='comment'
				placeholder={placeholder}
			></textarea>

			<Avatar src={img} />

			<Btn text='SEND' />
		</div>
	);
}
