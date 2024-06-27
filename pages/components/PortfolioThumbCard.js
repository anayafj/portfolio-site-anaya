import styles from '../../styles/components/PortfolioThumbCard.module.scss';

const pathToThumbs = 'work/_thumbs/';

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
			<img src={thumbnailPath} alt={title}/>
			<h2>{titleText}</h2>
		</div>
	);
}
