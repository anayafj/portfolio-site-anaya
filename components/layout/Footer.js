import styles from './Footer.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

const myStyles = classNames.bind(styles);

export default function Footer() {
	const [home, setHome] = useState(null);
	const router = useRouter();

	useEffect(() => {
		setHome(router.pathname === '/' ? true : false);
	}, [router.pathname]);

	const renderContactHeader = () => {
		if (home) {
			console.log('Path is root');
			return <h1>Got a project or just want to reach out</h1>;
		}
	};

	const handleContactClick = () => {
		console.log('Contact button Hit');
	};

	let footerStyles = myStyles({ footer: true }, `${home ? '' : 'shift'}`);

	return (
		<footer className={footerStyles}>
			<div className={styles.bottomGrey}></div>
			<div className={styles.footerMain}>
				<div className={styles.greyBar}></div>
				<div className={styles.ctaContent}>
					{renderContactHeader()}
					<div onClick={handleContactClick} className={styles.cta}>
						<div className={styles.ctaBg}>
							<div className={styles.blue}></div>
							<div className={styles.yellow}></div>
							<div className={styles.pink}></div>
						</div>
						<h2>
							Contact Me <span>&#187;</span>
						</h2>
					</div>
				</div>
			</div>
			<small>
				<span>&copy;</span>2022 Anayadev.com. All rights reserved.
			</small>
		</footer>
	);
}
