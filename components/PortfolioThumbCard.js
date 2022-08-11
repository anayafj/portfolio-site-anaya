import {
	ColorPink,
	FfAmatic,
	ColorOffWhite,
	FfHeavitas,
	ColorTeal,
} from '../styles/util/variables.module.scss';
import styled from 'styled-components';

const CardContainer = styled.div`
	cursor: pointer;
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	width: 370px;
	height: 232px;
	margin-bottom: 20px;
`;

const Title = styled.h1.attrs((props) => ({
	color: props.color || ColorPink,
}))`
	pointer-events: none;
	font-size: 16px;
	font-family: ${FfAmatic};
	letter-spacing: 0.5px;
	color: ${(props) => props.color};
	margin: 0 0 2px;
`;

const Image = styled.div.attrs((props) => ({
	color: props.borderColor || ColorTeal,
}))`
	pointer-events: none;
	width: 100%;
	height: 100%;
	max-height: 200px;
	border: 2px solid ${(props) => props.color};
	background-color: black;
`;

const Description = styled.p.attrs((props) => ({
	color: props.color || ColorOffWhite,
}))`
	pointer-events: none;
	font-size: 9px;
	font-family: ${FfHeavitas};
	letter-spacing: 0.5px;
	color: ${(props) => props.color};
	margin: 10px 0 0;
`;

export default function PorfolioThumbCard({
	handleClick,
	id,
	title,
	titleColor,
	imgBorderColor,
	description,
	descriptionColor,
}) {
	return (
		<CardContainer onClick={(e) => handleClick(id, e)}>
			<Title color={titleColor}>{title}</Title>
			<Image borderColor={imgBorderColor} />
			<Description color={descriptionColor}>{description}</Description>
		</CardContainer>
	);
}
