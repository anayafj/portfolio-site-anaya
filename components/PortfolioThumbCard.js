import {
	ColorPink,
	FfAmatic,
	ColorOffWhite,
	FfHeavitas,
	ColorTeal,
} from '../styles/util/variables.module.scss';
import styled from 'styled-components';

const CardContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	width: 370px;
	height: 232px;
`;

const Title = styled.h1.attrs((props) => ({
	color: props.color || ColorPink,
}))`
	font-size: 16px;
	font-family: ${FfAmatic};
	letter-spacing: 0.5px;
	color: ${(props) => props.color};
	margin: 0 0 2px;
`;

const Image = styled.div.attrs((props) => ({
	color: props.borderColor || ColorTeal,
}))`
	width: 100%;
	height: 100%;
	max-height: 200px;
	border: 2px solid ${(props) => props.color};
	background-color: black;
`;

const Description = styled.p.attrs((props) => ({
	color: props.color || ColorOffWhite,
}))`
	font-size: 9px;
	font-family: ${FfHeavitas};
	letter-spacing: 0.5px;
	color: ${(props) => props.color};
	margin: 10px 0 0;
`;

export default function PorfolioThumbCard({
	title,
	titleColor,
	imgBorderColor,
	description,
	descriptionColor,
}) {
	return (
		<CardContainer>
			<Title color={titleColor}>{title}</Title>
			<Image borderColor={imgBorderColor} />
			<Description color={descriptionColor}>{description}</Description>
		</CardContainer>
	);
}
