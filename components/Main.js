import styles from '../styles/components/Main.module.scss';

export default function Section() {
	return (
		<main className={styles.main}>
			<div className={styles['bgLines']}></div>
			<div className={styles['hola-container']}>
				<img className={styles['hola']} src="/svg/hola.svg" alt="Hola - text" />
				{/* <img
					className={styles['peep']}
					src="/svg/peep_standing.svg"
					alt="illustrated person"
				/> */}
			</div>

			<nav className={styles['homePage-navigation']}>
				<nav className={styles['workLink-container']}>
					<div className={styles['workLogo']}>
						<img src="/svg/homeNav_work.svg" alt="navButton - Work" />
					</div>
					<h2>Check out the projects, it's what i do</h2>
					<div className={styles['buttonLines-work']}></div>
				</nav>
				<div className={styles['homeCard']}>
					<h1>
						I design, animate, <span>&amp;</span> code <br /> Bringing a mixture
						of diverse skills and experieces to all projects
					</h1>
				</div>
				<nav className={styles['aboutLink-container']}>
					<img src="/svg/homeNav_me.svg" alt="navButton - About" />
					<h2>Please let me introduce myself</h2>
					<div className={styles['buttonLines-about']}></div>
				</nav>
			</nav>
		</main>
	);
}
