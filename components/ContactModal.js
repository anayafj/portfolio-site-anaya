import styles from '../styles/components/ContactModal.module.scss';
import { Fragment } from 'react';
import Script from 'next/script';
import Form from './EmailForm';

export default function ContactModal({ onCloseModal }) {
	return (
		<Fragment>
			<Script
				id="emailjs"
				src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
				strategy="beforeInteractive"
			/>
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
					<main className={styles.main}>
						<Form />
					</main>
				</div>
			</div>
		</Fragment>
	);
}
