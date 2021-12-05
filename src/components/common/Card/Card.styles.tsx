import styled from 'styled-components';

export const CardContainer = styled.div`
	max-width: 200px;
	width: 196px;
	height: 170px;
	max-height: 200px;
	display: flex;
	justify-content: left;
	flex-wrap: wrap;
	background: transparent;
	border: 1px solid
		${({
			theme: {
				colors: { primary },
			},
		}) => primary};
	box-sizing: border-box;
	border-radius: 6px;
	padding: 6px 8px;
	margin-bottom: 6px;
`;

export const PriceContainer = styled.div``;
