import styles from '../../styles/layouts/Header.module.scss';
import Logo from '../components/Logo';
import SubLogo from '../components/SubLogo';
import Navigation from '../components/MainNavigation';
import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();

	const renderLogo = () => {
		if (router.pathname === '/') {
			return (
				<header className={styles.header}>
					{/* <div className={styles.headerBg}></div> */}
					<Logo version="1" />
					<Navigation />
				</header>
			);
		} else {
			return (
				<header className={styles.headerPages}>
					{/* <SubLogo /> */}
					<Logo version="1" />
					<Navigation />
				</header>
			);
		}
	};

	return <>{renderLogo()}</>;
}
