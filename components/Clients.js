import styled from 'styled-components';

const ClientsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: 40px;
`;

const ClientIcon = styled.img`
	width: auto;
	height: 100%;
`;

export default function Clients() {
	return (
		<ClientsContainer>
			<ClientIcon src="/svg/clients/appleTv.svg" />
			<ClientIcon src="/svg/clients/primeVideo.svg" />
			<ClientIcon src="/svg/clients/sonyPictures.svg" />
			{/* <ClientIcon src="../public/svg/clients/onBroadway.png" /> */}
			<ClientIcon src="/svg/clients/disneyPlus.svg" />
			<ClientIcon src="/svg/clients/netflix.svg" />
			<ClientIcon src="/svg/clients/hulu.svg" />
			<ClientIcon src="/svg/clients/hbo.svg" />
			<ClientIcon src="/svg/clients/hboMax.svg" />
		</ClientsContainer>
	);
}
