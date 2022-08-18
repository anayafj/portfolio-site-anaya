import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 1000;
`;

export default function Modal({ isOpen, children, id, bgCloseModal }) {
	if (!isOpen) return null;

	const closeModal = (e) => {
		if (e.target.id === id) bgCloseModal();
	};

	return createPortal(
		<ModalContainer id={id} onClick={(e) => closeModal(e)}>
			{children}
		</ModalContainer>,
		document.body,
	);
}
