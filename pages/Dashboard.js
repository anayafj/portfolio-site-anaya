import styles from '../styles/pages/dashboard.module.scss';
// import { useRouter } from 'next/router';

export default function Dashboard() {
//   const router = useRouter();

// 	const handleClick = (e) => {
// 		e.preventDefault();
// 		switch (e.target.id) {
// 			case 'workLink':
// 				router.push('/portfolio');
// 				break;
// 			case 'aboutLink':
// 				router.push('/about');
// 				break;
// 			default:
// 				router.push('/');
// 		}
// 	};

	return (
		<main className={styles.main}>
			<div className={styles['hola-container']}>
				<img className={styles['hola']} src="/svg/hola.svg" alt="Hola - text" />
			</div>
			<div className={styles['peep-container']}>
				<img
					className={styles['peep']}
					src="/svg/peep_standing.svg"
					alt="illustrated person"
				/>
			</div>

			<div className={styles['homeCard']}>
					<h1>
						Hi, I'm Frankie.<br />
						Currently working in Los Angeles as an Account Manager.<br />
						Always looking for great opportunities.<br />
					</h1>
			</div>
		</main>
	);

}