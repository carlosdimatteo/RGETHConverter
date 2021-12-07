import styled from 'styled-components';

export const StyledInput = styled.input`
	width: 350px;
	background: ${({
		theme: {
			colors: { tertiary },
		},
	}) => tertiary};
	/* Raid Red */
	border: 1px solid
		${({
			theme: {
				colors: { primary },
			},
		}) => primary};
	box-sizing: border-box;
	border-radius: 2px;
	height: 32px;
	font-size: 14px;
	padding: 8px;
	color: ${({
		theme: {
			colors: { secondary },
		},
	}) => secondary};
`;

export const InputContainer = styled.div`
	display: flex;
	align-content: start;
`;
