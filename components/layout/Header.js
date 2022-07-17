import { Fragment } from 'react';
import styles from './Header.module.scss';
import Logo from '../MainLogo';
import SubLogo from '../SubLogo';
import Navigation from '../MainNavigation';
import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();

	// console.log('Current Route Path = ', router.pathname);

	const renderLogo = () => {
		if (router.pathname === '/') {
			return (
				<header className={styles.header}>
					<Logo version="1" />
				</header>
			);
		} else {
			return (
				<header className={styles.headerPages}>
					<SubLogo />
					<Navigation />
				</header>
			);
		}
	};

	return <Fragment>{renderLogo()}</Fragment>;
}
