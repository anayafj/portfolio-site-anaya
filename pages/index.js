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
				<link
					href="http://fonts.cdnfonts.com/css/blank-river"
					rel="stylesheet"
				></link>
			</Head>

			<div className={styles.wrapper}>
				{/* <Header /> */}
				{/* <Mavin /> */}
				{/* <Section /> */}
				<header className={styles.header}>
					<div className={styles.logoContainer}>
						<div className={styles.logoBorder}></div>
						<img src="/svg/logo_name.svg" alt="Logo - Francisco Anaya" />
						<div className={styles.subheaderContainer}>
							<h1>Designer</h1>
							<span></span>
							<h1>Developer</h1>
							<span></span>
							<div className={styles.subheaderEnd}>
								<h1>Web</h1>
								<h2>&amp;</h2>
								<h1>Rich Media</h1>
							</div>
						</div>
					</div>
				</header>
			</div>
		</div>
	);
}
