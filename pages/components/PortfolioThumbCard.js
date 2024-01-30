import {
	ColorPink,
	FfAmatic,
	ColorOffWhite,
	FfHeavitas,
	ColorTeal,
} from '../../styles/util/_variables.scss';
import styled from 'styled-components';

const pathToThumbs = 'work/_thumbs/';

const CardContainer = styled.div`
	cursor: pointer;
	display: inline-flex;
	flex: 0.5 0 250px;
	flex-direction: column;
	align-items: flex-start;
	max-width: 450px;
	margin-bottom: 30px;
`;

const Type = styled.h1.attrs((props) => ({
	color: props.color || ColorPink,
}))`
	pointer-events: none;
	font-size: 15px;
	font-family: ${FfAmatic};
	letter-spacing: 0.6px;
	color: ${(props) => props.color};
	margin: 0;
`;

const Image = styled.img.attrs((props) => ({
	color: props.borderColor || ColorTeal,
}))`
	pointer-events: none;
	width: 100%;
	/* height: 100%; */
	max-height: 280px;
	border: 2px solid ${(props) => props.color};
	background-color: black;
`;

const Title = styled.p.attrs((props) => ({
	color: props.color || ColorOffWhite,
}))`
	pointer-events: none;
	font-size: 8px;
	font-family: ${FfHeavitas};
	letter-spacing: 0.8px;
	color: ${(props) => props.color};
	margin: 5px 0 0 10px;
	/* margin: 0; */
`;

export default function PorfolioThumbCard({
	handleClick,
	id,
	title,
	client,
	type,
	titleColor,
	imgBorderColor,
	thumbnail,
	description,
	descriptionColor,
}) {
	const thumbnailPath = pathToThumbs + thumbnail;
	const titleText = client + ' - ' + title;

	return (
		<CardContainer onClick={(e) => handleClick(id, e)}>
			<Type color={titleColor}>{type}</Type>
			<Image borderColor={imgBorderColor} src={thumbnailPath} alt={title} />
			<Title color={descriptionColor}>{titleText}</Title>
		</CardContainer>
	);
}
