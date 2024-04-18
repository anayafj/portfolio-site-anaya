import { useRouter } from 'next/router';
import styles from '../../styles/components/Logo.module.scss';

export default function Logo({ version }) {
	// console.log('version = ' + version);
	const router = useRouter();

	const homeClick = (e) => {
		// console.log('homeClick');
		e.preventDefault();
		router.push('/');
	};

	return (
		<div onClick={homeClick} className={styles.logo}>
			<img src="/svg/logo_name.svg" alt="Logo - Francisco Anaya" />
		</div>
	);
}