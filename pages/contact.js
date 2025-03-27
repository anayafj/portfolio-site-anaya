import styles from '../styles/pages/contact.module.scss';
import Image from 'next/image';
import { useForm } from "react-hook-form"




export default function Contact() {
	console.log("Start up")
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	  } = useForm()

	const onSubmit = (data) => console.log(data)
	console.log(watch("message")) // watch input value by passing the name of it
	console.log(watch("fName"))
	console.log(watch("lName"))
	console.log(watch("eMail"))

	// export type FormData = {
	// 	name: string;
	// 	email: string;
	// 	message: string;
	//   };


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
							{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
							<form onSubmit={handleSubmit(onSubmit)}>
								{/* register your input into the hook by invoking the "register" function */}
								<label htmlFor="firstName">First Name</label>
								<input defaultValue="" {...register("fName")} />

								<label htmlFor="lastName">Last Name</label>
								<input defaultValue="" {...register("lName")} />

								<label htmlFor="email">Email</label>
								<input defaultValue="" {...register("eMail")} />

								<label htmlFor="message">Message</label>
								<input defaultValue="" {...register("message") } className={styles.messageBox}/>


								{/* include validation with required or other standard HTML validation rules */}
								{/* <input {...register("exampleRequired", { required: true })} /> */}
								{/* errors will return when field validation fails  */}
								{/* {errors.exampleRequired && <span>This field is required</span>} */}

								<input type="submit" className={styles.formSubmitBtn} />

								{/* <div className={styles.inputField}>
									<label>Email</label>
									<input></input>
								</div> */}
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