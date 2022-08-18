import styles from '../styles/components/ProjectModal.module.scss';
import { useRouter } from 'next/router';

export default function ProjectModal({
	onCloseModal,
	project: {
		title,
		client,
		type,
		media: { mediaType, source },
		modal: { headline, details },
	},
}) {
	const router = useRouter();

	const homeClick = () => {
		console.log('HomeClick');
		router.push('/');
	};

	return (
		<div className={styles.mainContainer}>
			<header>
				<div className={styles.logoContainer}>
					<div onClick={homeClick} className={styles.logo}>
						<img src="/svg/logo_initials.svg" alt="Logo initials" />
					</div>
					<div className={styles.subheaderContainer}>
						<h1>{title}</h1>
						<span></span>
						<h1>{client}</h1>
					</div>
				</div>
				<h1>{type}</h1>
				<button onClick={onCloseModal}>X</button>
			</header>
			<div className={styles.content}>
				<main className={styles.main}></main>
				<div className={styles.info}>
					<h1>{headline}</h1>
					<h2>{details}</h2>
				</div>
			</div>
		</div>
	);
}
