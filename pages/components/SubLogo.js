import styles from '../../styles/components/SubLogo.module.scss';
import { useRouter } from 'next/router';

export default function SubLogo() {
	const router = useRouter();

	const homeClick = (e) => {
		e.preventDefault();
		router.push('/');
	};

	return (
		<div onClick={homeClick} className={styles.logoContainer}>
			<div className={styles.logo}>
				<img src="/svg/logo_initials.svg" alt="Logo initials" />
			</div>
			<div className={styles.subheaderContainer}>
				<h1>Designer</h1>
				<span></span>
				<h1>Developer</h1>
				<span></span>
				<h1>Web</h1>
				<h2>&amp;</h2>
				<h1>Rich Media</h1>
			</div>
		</div>
	);
}
