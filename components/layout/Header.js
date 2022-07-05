import styles from './Header.module.scss';
import Logo from '../MainLogo';
import SubLogo from '../SubLogo';
import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();

	console.log('Current Route Path = ', router.pathname);

	const renderLogo = () => {
		console.log('renderLogo -- Current Route Path = ', router.pathname);
		if (router.pathname === '/') {
			return <Logo version="1" />;
		} else {
			return <SubLogo />;
		}
	};

	return <header className={styles.header}>{renderLogo()}</header>;
}
