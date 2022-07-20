import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import styles from './Layout.module.scss';
import Header from './Header';
import Footer from './Footer';

const myStyles = classNames.bind(styles);

export default function Layout(props) {
	const router = useRouter();
	const [path, setPath] = useState(null);

	useEffect(() => {
		setPath(router.pathname);
	}, [router.pathname]);

	console.log('Layout --- route = ', router.pathname);
	console.log('Layout --- path = ', path);

	let container = myStyles(
		{ container: true },
		`${path === '/about' ? 'onPath' : ''}`,
	);

	return (
		<Fragment>
			<div className={container}>
				<div className={styles.rightColumn}></div>
				<div className={styles.wrapper}>
					<Header />
					<section>{props.children}</section>
				</div>
				<Footer />
			</div>
		</Fragment>
	);
}
