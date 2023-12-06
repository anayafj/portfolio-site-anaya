import { useRouter } from 'next/router';
import styles from '../../styles/components/Logo.module.scss';

export default function Logo({ version }) {
	console.log('version = ' + version);
	const router = useRouter();

	const homeClick = (e) => {
		console.log('homeClick');
		e.preventDefault();
		router.push('/');
	};

	return (
		<div onClick={homeClick} className={styles.logoContainer}>
			<div className={styles.logo}>
				<img src="/svg/logo_name.svg" alt="Logo - Francisco Anaya" />
			</div>
			<div className={styles.subheaderContainer}>
				<div className={styles.leftBorder}></div>
				<div className={styles.subheaderText}>
					<h1>Designer</h1>
					<span></span>
					<h1>Developer</h1>
					<span></span>
					<h1>Web</h1>
					<h2>&amp;</h2>
					<h1>Rich Media</h1>
				</div>
				<div className={styles.rightBorder}></div>
			</div>
		</div>
	);
}