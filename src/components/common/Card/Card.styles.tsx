import styled from 'styled-components';

export const CardContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: left;
	flex-wrap: wrap;
	background: transparent;
	color: ${({
		theme: {
			colors: { secondary },
		},
	}) => secondary};
	border: 1px solid
		${({
			theme: {
				colors: { primary },
			},
		}) => primary};
	box-sizing: border-box;
	border-radius: 6px;
	padding: 20px 20px;
`;

export const PriceContainer = styled.div``;
