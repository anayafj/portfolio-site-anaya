import styles from '../../styles/components/PortfolioThumbCard.module.scss';
import Image from 'next/image';

const pathToThumbs = '/work/_thumbs/';

export default function PorfolioThumbCard({
	handleClick,
	id,
	title,
	client,
	type,
	thumbnail,
}) {
	const thumbnailPath = pathToThumbs + thumbnail;
	const titleText = client + ' - ' + title;

	return (
		<div onClick={(e) => handleClick(id, e)} className={styles.cardContainer}>
			<h1>{type}</h1>
			<Image
				src={thumbnailPath}
				priority
				alt={title}
				width={450}
                height={280}
			/>
			<h2>{titleText}</h2>
		</div>
	);
}