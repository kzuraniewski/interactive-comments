import React from 'react';
import './Reference.css';

export type ReferenceProps = {
	username: string;
};

export default function Reference({ username }: ReferenceProps) {
	return (
		<a href='' className='Reference'>
			{username}
		</a>
	);
}
