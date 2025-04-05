import styles from '../styles/pages/contact.module.scss';
import Image from 'next/image';
import { useForm } from "react-hook-form"




export default function Contact() {

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	  } = useForm()

	const onSubmit = (data) => console.log(data)
	// const onSubmit = (data) => console.log("TEST")
	console.log(watch("message")) // watch input value by passing the name of it
	console.log(watch("firstName"))
	console.log(watch("lastName"))
	console.log(watch("eMail"))

	// watch(["firstName", "number"])

	// export type FormData = {
	// 	name: string;
	// 	email: string;
	// 	message: string;
	//   };

// const subscription = watch((value, { name, type }) => console.log(value, name, type));

// const navigationRoutes = (route) => {
const myValidation = (field) => {
	let myName = field.target.name;
	console.log("Validation boy! - ",myName)
	// return {errors.myName && <span>First Name must be 2 characters min</span>}
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
							{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
							<form onSubmit={handleSubmit(onSubmit)}>
								{/* register your input into the hook by invoking the "register" function */}
								<label htmlFor="firstName">First Name</label>
								<input {...register("firstName", { required: true, minLength: 2, onBlur: myValidation })} />
								{/* <input
									defaultValue="" 
									type="text" 
          							id="firstName" 
									{...register("firstName", { required: true, minLength: 2 })}
									 /> */}
									 {errors.firstName && <span>First Name must be 2 characters min</span>}
									 {/* minLength: { value: 2, message: "First name must be more than 2 characters"} */}
									 {/* {errors.firstName && <p>{errors.firstName.message}</p>} */}

								{/* {errors.exampleRequired && <span>This field is required</span>}  */}

								<label htmlFor="lastName">Last Name</label>
								<input defaultValue="" {...register("lastName", { required: true })} />
								{errors.lastName && <span>This field is required</span>}

								<label htmlFor="email">Email</label>
								<input defaultValue="" {...register("eMail", { required: true })} />

								<label htmlFor="message">Message</label>
								<input defaultValue="" {...register("message", { required: true }) } className={styles.messageBox}/>


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