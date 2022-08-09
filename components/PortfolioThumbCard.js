import styles from '../styles/components/PortfolioThumbCard.module.scss';
import { ColorPink, FfAmatic } from '../styles/util/variables.module.scss';
import styled from 'styled-components';
import { Fragment } from 'react';

const Title = styled.h1.attrs((props) => ({
	color: props.color || ColorPink,
}))`
	font-size: 16px;
	font-family: ${FfAmatic};
	letter-spacing: 0.5px;
	color: ${(props) => props.color};
	margin: 0 0 2px;
`;

export default function PorfolioThumbCard({ title, titleColor, description }) {
	return (
		<Fragment>
			<div className={styles.workThumb}>
				<Title color={titleColor}>{title}</Title>
				<div className={styles.thumbImage}></div>
				<p>{description}</p>
			</div>
		</Fragment>
	);
}
