import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/pages/Home.module.scss';
import Header from '../components/Header';
import Main from '../components/Main';
import Section from '../components/Section';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Francisco Anaya Portfolio Site</title>
				<meta name="description" content="Portfolio website using NextJs" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.wrapper}>
				<Header />
				<Main />
				<Section />
			</div>
		</div>
	);
}
