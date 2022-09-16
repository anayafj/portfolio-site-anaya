import styles from '../styles/components/ContactModal.module.scss';

import Form from './EmailForm';

export default function ContactModal({ onCloseModal }) {
	return (
		<div className={styles.mainContainer}>
			<header>
				<div className={styles.logoContainer}>
					<div className={styles.logo}>
						<img src="/svg/logo_initials.svg" alt="Logo initials" />
					</div>
					<div className={styles.subheaderContainer}>
						{/* <h1>{client}</h1>
						<span></span>
						<h1>{title}</h1> */}
					</div>
				</div>
				{/* <h1>{type}</h1> */}
				<button onClick={onCloseModal}>X</button>
			</header>
			<div className={styles.content}>
				<h1>
					got a project or just want to reach out <span>Contact Me</span>
				</h1>
				<main className={styles.main}>Contact</main>
			</div>
		</div>
	);
}
