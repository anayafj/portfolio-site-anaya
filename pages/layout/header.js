import styles from '../../styles/layouts/Header.module.scss';
import Logo from '../components/Logo';
import SubLogo from '../components/SubLogo';
import Navigation from '../components/MainNavigation';
import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();
	let isPages = false

	const renderLogo = () => {
		if (router.pathname === '/') {
			return (
				<header className={styles.header}>
					{/* <div className={styles.headerBg}></div> */}
					<Logo isPages={isPages}  />
					<Navigation isPages={isPages}/>
				</header>
			);
		} else {
			isPages = true;
			return (
				<header className={styles.headerPages}>
					{/* <div className={styles.headerBg}></div> */}
					{/* <SubLogo /> */}
					<Logo isPages={isPages}/>
					<Navigation isPages={isPages}/>
				</header>
			);
		}
	};

	return <>{renderLogo()}</>;
}
