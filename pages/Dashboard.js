import styles from '../styles/pages/dashboard.module.scss';
import Image from 'next/image';
import holaTxt from "../public/svg/HOLA.svg";
import peep from "../public/svg/peep_standing.svg";
// import { useRouter } from 'next/router';

export default function Dashboard() {
	//   const router = useRouter();

	//  const handleClick = (e) => {
	//      e.preventDefault();
	//      switch (e.target.id) {
	//          case 'workLink':
	//              router.push('/portfolio');
	//              break;
	//          case 'aboutLink':
	//              router.push('/about');
	//              break;
	//          default:
	//              router.push('/');
	//      }
	//  };

	return (
		<main className={styles.main}>
			<div className={styles['hola-container']}>
				<Image
					className={styles['hola']}
					src={holaTxt}
					alt="Lrg HOLA text"
				/>
			</div>
			<div className={styles['peep-container']}>
				<Image
					className={styles['peep']}
					src={peep}
					alt="illustrated person"
				/>
			</div>
			<div className={styles['homeCard']}>
				<h1>
					Hi, I&apos;m Frankie.<br />
					Currently working in Los Angeles as an Account Manager.<br />
					Always looking for great opportunities.<br />
				</h1>
			</div>
		</main>
	);

}