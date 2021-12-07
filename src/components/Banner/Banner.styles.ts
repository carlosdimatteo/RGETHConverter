import styled from 'styled-components';

export const BannerContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const TextAndLogo = styled.div`
	display: flex;
	align-items: center;
`;

export const Title = styled.h2`
	font-size: 30px;
	color: ${({
		theme: {
			colors: { primary },
		},
	}) => primary};
	margin-bottom: 10px;
`;

export const LogoContainer = styled.div`
	margin-right: 20px;
	svg {
		width: 150px;
		height: 100%;
	}
`;

export const TitleAndDescription = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TwitterUsernamesContainer = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 15px;
`;
