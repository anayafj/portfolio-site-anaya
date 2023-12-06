import styles from '../styles/pages/dashboard.module.scss';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();

	const handleClick = (e) => {
		e.preventDefault();
		switch (e.target.id) {
			case 'workLink':
				router.push('/portfolio');
				break;
			case 'aboutLink':
				router.push('/about');
				break;
			default:
				router.push('/');
		}
	};

	return (
		<main className={styles.main}>
			<div className={styles['bgLines']}></div>
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

			<nav className={styles['homePage-navigation']}>
				<section
					onClick={handleClick}
					id="workLink"
					className={styles['workLink-container']}
				>
					<div className={styles['workLogo']}>
						<img src="/svg/homeNav_work.svg" alt="navButton - Work" />
					</div>
					<h2>Check out my projects</h2>
					<div className={styles['buttonLines-work']}></div>
				</section>
				<div className={styles['homeCard']}>
					<h1>
						I design, animate, <span>&amp;</span> code <br /> Bringing a mixture
						of diverse skills and experieces to all projects
					</h1>
				</div>
				<section
					onClick={handleClick}
					id="aboutLink"
					className={styles['aboutLink-container']}
				>
					<div className={styles['aboutLogo']}>
						<img src="/svg/homeNav_me.svg" alt="navButton - About" />
					</div>
					{/* <h2>Please let me introduce myself</h2> */}
					<h2>Let me introduce myself</h2>
					<div className={styles['buttonLines-about']}></div>
				</section>
			</nav>
		</main>
	);

}