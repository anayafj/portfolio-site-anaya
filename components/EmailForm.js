import styles from '../styles/components/EmailForm.module.scss';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const emailPattern =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function EmailForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log('This is the form data = ', data);
	console.log('ERR - ', errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
			<div className={styles.firstName}>
				<label htmlFor="FirstName">First Name</label>
				<input
					type="text"
					defaultValue=""
					placeholder="First Name"
					{...register('FirstName', {
						required: 'this is required',
						maxLength: {
							value: 80,
							message: 'First name is too long',
						},
					})}
				/>
				{errors.FirstName && <p>{errors.FirstName.message}</p>}
			</div>
			<div className={styles.lastName}>
				<label htmlFor="LastName">Last Name</label>
				<input
					type="text"
					defaultValue=""
					placeholder="Last Name"
					{...register('LastName', {
						required: 'this is required',
						maxLength: {
							value: 80,
							message: 'Last name is too long',
						},
					})}
				/>
				{errors.LastName && <p>{errors.LastName.message}</p>}
			</div>
			<div className={styles.email}>
				<label htmlFor="Email">Email</label>
				<input
					type="text"
					defaultValue=""
					placeholder="Email"
					{...register('Email', {
						required: 'this is required',
						pattern: {
							value: emailPattern,
							message: 'Not a valid Email',
						},
					})}
				/>
				{errors.Email && <p>{errors.Email.message}</p>}
			</div>
			<div className={styles.message}>
				<label htmlFor="Message">Message</label>
				<textarea
					type="text"
					defaultValue=""
					placeholder="Message"
					{...register('Message', {
						required: 'this is required',
						maxLength: {
							value: 300,
							message: 'Message is too long',
						},
					})}
				/>
				{errors.Message && <p>{errors.Message.message}</p>}
			</div>

			<input type="submit" className={styles.submitButton} />
		</form>
	);
}
