import styles from '../styles/components/PortfolioThumbCard.module.scss';
import { Fragment } from 'react';

export default function PorfolioThumbCard({ title, description }) {
	return (
		<Fragment>
			<div className={styles.workThumb}>
				<h1>{title}</h1>
				<div className={styles.thumbImage}></div>
				<p>{description}</p>
			</div>
		</Fragment>
	);
}
