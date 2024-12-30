import styles from '../styles/pages/contact.module.scss';
import Image from 'next/image';

export default function Contact() {

	return (
		<div className={styles.contactPage}>

			<div className={styles.top}>
				{/* <div className={styles.subheader}>
					<h1> About Me</h1>
					<h2>Let me introduce myselfe</h2>
				</div> */}
			</div>
			<div className={styles.mainContainer}>
				<div className={styles.headerContainer}>
					<Image
						src="/svg/contactMe_txt.svg"
						alt="CONTACT ME - Header text"
						width={1403}
						height={115}
						// style={{
						// 	width: '103%',
						// 	height: 'auto',
						//   }}
					/>				
				</div>
					
				<div className={styles.contentContainer}>
				
					<div className={styles.pigeonImage}>
						<Image
							src="/images/pigeonMessenger.png"
							alt="Cyborg Messenger Pigeon"
							width={2048}
							height={2048}
							
						/>
					</div>
					<div className={styles.formContainer}>
						<div className={styles.subheader}>
							<p>Fill out this form and drop me a messege.</p>
						</div>
						<div className={styles.contactFormContainer}
							></div>
					</div>
				</div>
			</div>
			
			<hr noshade="false" />
		</div>
	);
}
