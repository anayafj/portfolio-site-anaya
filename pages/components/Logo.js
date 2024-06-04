import { useRouter } from 'next/router';
import styles from '../../styles/components/Logo.module.scss';
// import Image from 'next/image';
// import mainLogo from "../../public/svg/logo_name.svg";

export default function Logo({ isPages }) {
	// console.log('version = ' + version);
	console.log('isPages = ',isPages);
	
// if True, we update logo with a new class


	const router = useRouter();

	const homeClick = (e) => {
		// console.log('homeClick');
		e.preventDefault();
		router.push('/');
	};

	return (
		<div onClick={homeClick} className={styles.logo}>
			{/* <Image
                    className={styles['img']}
                    src={mainLogo}
                    alt="Logo - Francisco Anaya"
                /> */}
			<img src="/svg/logo_name.svg" alt="Logo - Francisco Anaya" />
		</div>
	);
}
