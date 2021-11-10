import styles from '../styles/components/Main.module.scss';

export default function Section() {
	return (
		<main className={styles.main}>
			<div className={styles.head}>
				<div className={styles.portrait}>
					<img
						className={styles.img}
						src="/images/portrait_photo.jpg"
						alt="portfolio photo"
					/>
				</div>
				<h1>Francisco J Anaya</h1>
				<h2>Front End Developer</h2>
				<div className="line"></div>
			</div>
			<div className={styles.info}>
				<p>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly believable.
				</p>
			</div>
		</main>
	);
}
