import { useRouter } from 'next/router';
import styles from '../../styles/components/Logo.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

const myStyles = classNames.bind(styles);

export default function Logo({ isPages }) {
	const router = useRouter();
	const homeClick = (e) => {
		e.preventDefault();
		router.push('/');
	};

	let logo = myStyles(
		{ logo: true },
		{'logo' : true},
		`${isPages === true ? 'small' : ''}`,
	);	

	return (
		<div onClick={homeClick} className={logo}>
			<Image
				className={styles.img}
				src="/svg/logo_name.svg"
				alt="Logo - Francisco Anaya"
				width={"100"}
				height={"100"}
			/>
		</div>
	);
}
