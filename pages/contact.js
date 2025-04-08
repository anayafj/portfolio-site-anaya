import styles from '../styles/pages/contact.module.scss';
import Image from 'next/image';
import { useForm } from "react-hook-form"




export default function Contact() {
	const emailValidationPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	  } = useForm({
		mode: 'onBlur',
	  })

	  let sendEmail = (emailValues) => {
		console.log("send email using this data - ", emailValues);
	};

	const onSubmit = (data) => {
		console.log('On submit hit!');
		sendEmail(data);
	}

	



	return (
		<div className={styles.contactPage}>
			<div className={styles.mainContainer}>
				<div className={styles.headerContainer}>
					<Image
						src="/svg/contactMe_txt.svg"
						alt="Header text - CONTACT ME"
						width={1403}
						height={115}
					/>
				</div>
				<div className={styles.contentContainer}>
					<div className={styles.pigeonImage}>
						<Image
							src="/images/pigeonMessenger_crop.png"
							alt="Cyborg Messenger Pigeon"
							width={1689}
							height={1751}
							priority
						/>
					</div>
					<div className={styles.formContainer}>
						<div className={styles.subheader}>
							<p>Fill out this form and drop me a messege.</p>
						</div>
						<div className={styles.contactFormContainer}>
							<form onSubmit={handleSubmit(onSubmit)}>
								<label htmlFor="firstName">First Name</label>
								<input {...register("firstName", { required: true, minLength: 2})} />
								{errors.firstName && <span>*Required - Min 2 characters </span>}

								<label htmlFor="lastName">Last Name</label>
								<input defaultValue="" {...register("lastName", { required: true, minLength: 2})} />
								{errors.lastName && <span>*Required - Min 2 characters </span>}

								<label htmlFor="eMail">Email</label>
								<input defaultValue="" {...register("eMail", { required: true, pattern: emailValidationPattern })} />
								{errors.eMail && <span>*Required - Incorrect email format </span>}

								<label htmlFor="message">Message</label>
								<input defaultValue="" {...register("message", { required: true, maxLength: 500 }) } className={styles.messageBox}/>
								{errors.message && <span>*Required - Max 500 characters </span>}

								<input type="submit" className={styles.formSubmitBtn} />
							</form>
						</div>
					</div>
				</div>
			</div >

		<hr noshade="false" />
		</div >
	);
}

// handleSubmit(onSubmit)