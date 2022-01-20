import React, { useEffect, useRef, useState } from 'react';
import './CommentWrapper.css';
import TextInput from '../TextInput';
import data from '../../data';
import Actions from './Actions';
import KarmaCounter from './KarmaCounter';
import Content from '../Content';
import Btn from '../Btn';
import Textarea from '../Textarea';
import UserData from './UserData';

const breakpoints = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1400,
};

export default function CommentWrapper({ comment, replyAt, setReplyAt, openModal }) {
	const {
		content,
		createdAt,
		score,
		user: {
			image: { png: img },
			username,
		},
		replyingTo,
	} = comment;
	// check if the comment belongs to the current user
	const currentUser = username === data.currentUser.username;
	// check if the device is desktop sized
	const isDesktop = window.screen.width >= breakpoints.lg;

	const [replyMode, setReplyMode] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [textareaValue, setTextareaValue] = useState(content);
	const ref = useRef(null);

	useEffect(() => {
		setReplyMode(replyAt === ref);
	}, [replyAt]);

	return (
		<div ref={ref} className='CommentWrapper'>
			<div className='Comment'>
				{isDesktop ? (
					<>
						<KarmaCounter karma={score} />

						<div className='Comment__content-wrapper'>
							<div className='Comment__strip'>
								<UserData
									img={img}
									username={username}
									createdAt={createdAt}
									currentUser={currentUser}
								/>

								{/* edit & delete for currentUser, reply otherwise */}
								{currentUser ? (
									<Actions
										delete={openModal}
										// exitting edit mode through action will dismiss changes
										edit={() => setEditMode((editMode) => !editMode)}
									/>
								) : (
									<Actions reply={() => setReplyMode(false)} />
								)}
							</div>

							{editMode ? (
								<>
									<Textarea
										content={content}
										value={textareaValue}
										setValue={setTextareaValue}
									/>

									<Btn text='UPDATE' onClick={() => setEditMode(false)} />
									{/* doesn't update content for now */}
								</>
							) : (
								<Content text={replyingTo ? `@${replyingTo} ` + content : content} />
							)}
						</div>
					</>
				) : (
					<>
						<UserData
							img={img}
							username={username}
							createdAt={createdAt}
							currentUser={currentUser}
						/>

						{editMode ? (
							<>
								<Textarea
									content={content}
									value={textareaValue}
									setValue={setTextareaValue}
								/>

								<Btn text='UPDATE' onClick={() => setEditMode(false)} />
								{/* doesn't update content for now */}
							</>
						) : (
							<Content text={replyingTo ? `@${replyingTo} ` + content : content} />
						)}

						<div className='Comment__strip'>
							<KarmaCounter karma={score} />

							{currentUser ? (
								<Actions
									delete={openModal}
									edit={() => setEditMode((editMode) => !editMode)}
								/>
							) : (
								<Actions reply={() => setReplyMode(false)} />
							)}
						</div>
					</>
				)}
			</div>

			{replyMode && (
				<TextInput img={data.currentUser.image.png} placeholder='Add a reply...' />
			)}
		</div>
	);
}
