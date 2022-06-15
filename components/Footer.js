import styles from '../styles/components/Footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.greyBar}></div>
			<div className={styles.ctaContent}>
				<h1>Got a project or just want to reach out</h1>
				<div className={styles.cta}>
					<div className={styles.ctaBg}>
						<div className={styles.blue}></div>
						<div className={styles.yellow}></div>
						<div className={styles.pink}></div>
					</div>
					<h2>
						Contact Me <span>&#187;</span>
					</h2>
				</div>
			</div>
			<small>
				<span>&copy;</span>2022 Anayadev.com. All rights reserved.
			</small>
		</footer>
	);
}
