import Link from 'next/link';
import styles from '../styles/components/Header.module.scss';

export default function Header() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href="/portfolio">Work</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
