import { useRouter } from 'next/router';
import styles from '../../styles/components/Logo.module.scss';
// import Image from 'next/image';
// import mainLogo from "../../public/svg/logo_name.svg";

export default function Logo({ version }) {
	// console.log('version = ' + version);
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
