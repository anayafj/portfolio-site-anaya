import styles from '../styles/pages/about.module.scss';

export default function About() {

	return (
		<div className={styles.aboutPage}>

			<div className={styles.top}>
				<div className={styles.subheader}>
					<h1> About Me</h1>
					<h2>Let me introduce myselfe</h2>
				</div>
			</div>
			<div className={styles.mainContainer}>
				<div className={styles.backgroundImage}>
					<img src="/images/nopal_large.png" alt="Close-up of a nopal" />
				</div>
				<div className={styles.projectContainer}>
					{/* <div className={styles.projects}>{renderProjects()}</div> */}
				</div>
			</div>

			{/* <div className={styles.top}>
					<div className={styles.lockup}>
						<div className={styles.photo}>
							<img src="/images/about_photo.png" alt="Photo" />
						</div>
						<div className={styles.name}>
							<img src="/svg/logo_name_sm.svg" alt="Francisco Anaya" />
						</div>
					</div>
				</div> */}
			{/* <div className={styles.bottom}>
					<div className={styles.subheader}>
						<h1>
							I design, animate, <span>&amp;</span> code. Bringing a mixture of
							diverse skills and experieces to all projects.
						</h1>
					</div>
					<div className={styles.tabLogo}>
						<img src="/svg/homeNav_me.svg" alt="About Me Logo" />
						<div className={styles.lines}></div>
					</div>
				</div> */}
			<hr noshade="false" />
		</div>
	);
}
