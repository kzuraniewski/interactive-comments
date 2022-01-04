import React from 'react';
import Reference from './Reference';

export default function Content({ text }) {
	return (
		<div className='Content'>
			{/* replace every word starting with '@' with a reference */}
			{text
				.trim()
				.split(' ')
				.map((word, index) => {
					if (word[0] === '@')
						return (
							<React.Fragment key={index}>
								<Reference username={word} />{' '}
							</React.Fragment>
						);

					return word + ' ';
				})}
		</div>
	);
}
