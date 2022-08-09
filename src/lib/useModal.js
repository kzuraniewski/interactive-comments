import { useContext } from 'react';
import { ModalContext } from '../comment-section/ModalProvider';

const useModal = () => {
	const openModal = useContext(ModalContext);
	return openModal;
};

export default useModal;
