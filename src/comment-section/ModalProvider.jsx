import React, { useCallback, useState } from 'react';
import Modal from './Modal';

export const ModalContext = React.createContext(null);

const defaultOptions = {
	title: 'Modal',
	cancel: 'No, cancel',
	confirm: 'Yes, confirm',
};

export default function ModalProvider({ children }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [options, setOptions] = useState(defaultOptions);

	const openModal = newOptions => {
		setIsModalOpen(true);

		for (const key of Object.keys(defaultOptions)) {
			newOptions[key] ??= defaultOptions[key];
		}

		setOptions(newOptions);
	};

	// modal always closes when one of its buttons is pressed
	const handleEvent = useCallback(
		cb => () => {
			cb?.();
			setIsModalOpen(false);
		},
		[]
	);

	return (
		<ModalContext.Provider value={openModal}>
			{children}

			<Modal
				isOpen={isModalOpen}
				onConfirm={handleEvent(options.onConfirm)}
				onCancel={handleEvent(options.onCancel)}
				{...options}
			/>
		</ModalContext.Provider>
	);
}
