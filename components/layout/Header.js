import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
	const router = useRouter();
	console.log('pathname = ' + router.pathname);

	const handleClick = () => {
		console.log('header clicked');
		// e.preventDefault();
		// router.push('/');
	};
	return (
		<header className={styles.header}>
			<Link href="/">
				<div className={styles.logoContainer}>
					<div onClick={handleClick} className={styles.logo}>
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
			</Link>
		</header>
		// <nav className={styles.nav}>
		// 	<ul>
		// 		<li>
		// 			<Link href="/portfolio">Work</Link>
		// 		</li>
		// 		<li>
		// 			<Link href="/about">About</Link>
		// 		</li>
		// 		<li>
		// 			<Link href="/contact">Contact</Link>
		// 		</li>
		// 	</ul>
		// </nav>
	);
}
