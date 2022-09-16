import styles from '../styles/components/EmailForm.module.scss';

export default function EmailForm() {
	return (
		<div>
			<h1>Email Form</h1>
			<form>
				<div>
					<lable>First Name</lable>
					<input>FirstName</input>
				</div>
				<div>
					<lable>Last Name</lable>
					<input>LastName</input>
				</div>
				<div>
					<lable>Email</lable>
					<input>Email</input>
				</div>

				<div>
					<textarea></textarea>
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
}
