import styles from '../styles/pages/about.module.scss';
import classNames from 'classnames/bind';

const myStyles = classNames.bind(styles);

export default function AboutPage() {
	return (
		<div>
			<div className={styles.background}>BG</div>
			<div className={styles.standingGuy}>Guy</div>
			<div className={styles.top}>
				<div className={styles.photo}>Photo</div>
				<div className={styles.name}>Francisco Anaya</div>
				<div className={styles.linkedIn}>LinkedIn</div>
			</div>
			<div className={styles.aboutText}>This is about me</div>
			<div className={styles.bottom}>
				<div className={styles.subheader}>You can do it!</div>
				<div className={styles.tabLogo}>AboutMe</div>
			</div>
		</div>
	);
}
