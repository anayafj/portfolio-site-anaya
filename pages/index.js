import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/pages/Home.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Francisco Anaya Portfolio Site</title>
				<meta name="description" content="Portfolio website using NextJs" />
				<link rel="icon" href="/favicon.ico" />
				<link
					href="http://fonts.cdnfonts.com/css/blank-river"
					rel="stylesheet"
				></link>
				<link href="http://fonts.cdnfonts.com/css/heavitas" rel="stylesheet" />
			</Head>

			<div className={styles.rightColumn}></div>
			<div className={styles.wrapper}>
				<Header />
				<Main />
			</div>
			<Footer />
		</div>
	);
}
