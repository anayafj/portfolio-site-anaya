import { Fragment } from 'react';
import styles from '../../styles/pages/Home.module.scss';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';

export default function layout(props) {
	return (
		<Fragment>
			<div className="container">
				<div className={styles.rightColumn}></div>
				<div className={styles.wrapper}>
					<Header />
					{/* <Main /> */}
					<main>{props.children}</main>
				</div>
				<Footer />
			</div>
		</Fragment>
	);
}
