import styles from '../../styles/components/ProjectModal.module.scss';
import MainContent from './Ad';

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
	return (
		<div className={styles.mainContainer}>
			<header>
				<div className={styles.logoContainer}>
					{/* <div className={styles.logo}>
						<img src="/svg/logo_initials.svg" alt="Logo initials" />
					</div> */}
					<h1>{type}</h1>
					<div className={styles.subheaderContainer}>
						<h1>{client}</h1>
						<span></span>
						<h1>{title}</h1>
						{/* <span></span> */}
					</div>
				</div>
				
				<button onClick={onCloseModal}>X</button>
			</header>
			<div className={styles.content}>
				<main className={styles.main}>
					<MainContent />
				</main>
				<div className={styles.info}>
					<hr />
					<h1>{headline}</h1>
					{/* <h2>{details}</h2> */}
				</div>
			</div>
		</div>
	);
}
