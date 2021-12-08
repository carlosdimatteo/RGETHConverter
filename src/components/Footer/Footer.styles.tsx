import styled from 'styled-components';

export const FooterContainer = styled.div`
	position: absolute;
	bottom: 30px;
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
	width: 80%;
	padding: inherit;
`;

export const FooterText = styled.span`
	color: ${({
		theme: {
			colors: { secondary },
		},
	}) => secondary};
	font-size: 12px;
	font-weight: 700;
	line-height: 20px;
`;
