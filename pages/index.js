import Head from 'next/head';
import { Fragment } from 'react';
import HomePage from '../components/HomePage';

export default function Home() {
	console.log('Index ran');
	return (
		<Fragment>
			<Head>
				<title>Francisco Anaya Portfolio Site</title>
				<meta name="description" content="Portfolio website using NextJs" />
				<link rel="icon" href="/favicon.ico" />
				<link
					href="http://fonts.cdnfonts.com/css/blank-river"
					rel="stylesheet"
				></link>
				<link href="http://fonts.cdnfonts.com/css/heavitas" rel="stylesheet" />
				<link
					href="http://fonts.cdnfonts.com/css/amatic-sc-2"
					rel="stylesheet"
				></link>
				{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/EasePack.min.js"></script> */}
			</Head>
			<HomePage />
		</Fragment>
	);
}
