import styles from '../styles/components/ProjectModal.module.scss';
// import styled from 'styled-components';

export default function ProjectModal({ onCloseModal }) {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>
				<button onClick={onCloseModal}>X</button>
			</div>
			<div className={styles.content}></div>
			<button onClick={onCloseModal}>X</button>
		</div>
	);
}
