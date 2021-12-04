import styled from 'styled-components';

export const Container = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 5px;

	:hover span {
		color: ${({ theme: { colors: primary } }) => primary};
	}
`;

export const TwitterLogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 10px;
`;
