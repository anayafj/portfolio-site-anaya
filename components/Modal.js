import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalContainer = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	width: 100vw;
	height: 100vh;
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
