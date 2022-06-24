import { Fragment } from 'react';
import styles from './Layout.module.scss';
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
	return (
		<Fragment>
			<div className={styles.container}>
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
