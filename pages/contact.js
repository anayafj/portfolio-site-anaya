import styles from '../styles/pages/contact.module.scss';
import Image from 'next/image';
// import { useForm } from 'react-hook-form';

export default function Contact() {

	// export type FormData = {
	// 	name: string;
	// 	email: string;
	// 	message: string;
	//   };

	// function onSubmit() {
	// 	const { register, handleSubmit } = useForm<FormData>();
	// 	sendEmail(data);
	// 	console.log("Submit Email");
	//   }

	return (
		<div className={styles.contactPage}>
			<div className={styles.mainContainer}>
				<div className={styles.headerContainer}>
					<Image
						src="/svg/contactMe_txt.svg"
						alt="CONTACT ME - Header text"
						width={1403}
						height={115}
					/>				
				</div>					
				<div className={styles.contentContainer}>
					<div className={styles.pigeonImage}>
						<Image
							src="/images/pigeonMessenger.png"
							alt="Cyborg Messenger Pigeon"
							width={2048}
							height={2048}
							priority
						/>
					</div>
					<div className={styles.formContainer}>
						<div className={styles.subheader}>
							<p>Fill out this form and drop me a messege.</p>
						</div>
						<div className={styles.contactFormContainer}>
						<form>
							<div className={styles.inputField}>
								<label>Email</label>
								<input></input>
							</div>		
							<div className={styles.submitBtn} >
								<button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
								Submit
								</button>
							</div>
						</form>
						</div>
					</div>
				</div>
			</div>
			
			<hr noshade="false" />
		</div>
	);
}

// handleSubmit(onSubmit)