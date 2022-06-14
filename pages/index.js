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
				<link href="http://fonts.cdnfonts.com/css/heavitas" rel="stylesheet" />
			</Head>

			<div className={styles.rightColumn}></div>
			<div className={styles.wrapper}>
				{/* <Header /> */}
				{/* <Mavin /> */}
				{/* <Section /> */}
				{/* <div className={styles.rightColumn}></div> */}
				<header className={styles.header}>
					<div className={styles.logoContainer}>
						<div className={styles.logo}>
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
				</header>
				<main></main>
			</div>
			<footer className={styles.footer}>
				<div className={styles.greyBar}></div>
				<div className={styles.ctaContent}>
					<h1>Got a project or just want to reach out</h1>
					<div className={styles.cta}>
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
				<small>
					<span>&copy;</span>2022 Anayadev.com. All rights reserved.
				</small>
			</footer>
		</div>
	);
}
