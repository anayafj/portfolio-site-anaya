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
			<div className={styles['peep-container']}>
				<img
					className={styles['peep']}
					src="/svg/peep_standing.svg"
					alt="illustrated person"
				/>
			</div>

			<nav className={styles['homePage-navigation']}>
				<section className={styles['workLink-container']}>
					<div className={styles['workLogo']}>
						<img src="/svg/homeNav_work.svg" alt="navButton - Work" />
					</div>
					<h2>Check out the projects, it's what i do</h2>
					<div className={styles['buttonLines-work']}></div>
				</section>
				<div className={styles['homeCard']}>
					<h1>
						I design, animate, <span>&amp;</span> code <br /> Bringing a mixture
						of diverse skills and experieces to all projects
					</h1>
				</div>
				<section className={styles['aboutLink-container']}>
					<div className={styles['aboutLogo']}>
						<img src="/svg/homeNav_me.svg" alt="navButton - About" />
					</div>
					<h2>Please let me introduce myself</h2>
					<div className={styles['buttonLines-about']}></div>
				</section>
			</nav>
		</main>
	);
}
