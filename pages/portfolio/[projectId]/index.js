// import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PortfolioProjectPage() {
	const router = useRouter();
	console.log(router.pathname);
	console.log(router.query);

	return (
		<div>
			<div>Portfolio Project Id</div>
		</div>
	);
}
