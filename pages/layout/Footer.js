import styles from '../../styles/layouts/Footer.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

const myStyles = classNames.bind(styles);
const headline = 'Got a project or just want to reach out';

export default function Footer() {
	const [pageName, setPageName] = useState(null);
	const router = useRouter();

	// check to see what page user is on and set state to that page
	useEffect(() => {
		setPageName(router.pathname === '/' ? null : router.pathname.slice(1));
	}, [router.pathname]);

	const renderContactHeader = () => {	return <h1>{headline}</h1> }

	const handleContactClick = () => { router.push('/contact') }

	// styles --------------------------------------------------------------
	let footerStyles = myStyles(
		{ footer: true },
		`${pageName === null ? '' : 'shift'}`,
	)

	return (
		<footer className={footerStyles}>
			<div className={styles.ctaContent}>
				{renderContactHeader()}
				<div onClick={handleContactClick} className={styles.cta}>
					<div className={styles.ctaBg}>
						<div className={styles.blue}></div>
						<div className={styles.yellow}></div>
						<div className={styles.pink}></div>
					</div>
					<h2>Contact Me <span>&#187;</span></h2>
				</div>
			</div>
		</footer>
	)
}