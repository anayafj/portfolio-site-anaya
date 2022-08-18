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
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
					rel="stylesheet"
				></link>
				<link
					href="http://fonts.cdnfonts.com/css/avenir"
					rel="stylesheet"
				></link>
			</Head>
			<HomePage />
		</Fragment>
	);
}
