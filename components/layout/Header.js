import styles from './Header.module.scss';
import Logo from '../MainLogo';

export default function Header() {
	return (
		<header className={styles.header}>
			<Logo version="1" />
		</header>
	);
}
