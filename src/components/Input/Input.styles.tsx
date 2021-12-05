import styled from 'styled-components';

export const StyledInput = styled.input`
	background: #373737;
	/* Raid Red */
	border: 1px solid #ff3864;
	display: inline-block;
	box-sizing: border-box;
	border-radius: 2px;
	height: 32px;
	font-family: Inter;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 17px;
	padding: 8px;
	/* identical to box height */

	color: ${({
		theme: {
			colors: { secondary },
		},
	}) => secondary};
	&:focus {
	}
`;

export const StyledLabel = styled.span`
	font-size: 20px;
	color: ${({
		theme: {
			colors: { primary },
		},
	}) => primary};
	margin: 8px;
`;

export const InputContainer = styled.div`
	display: flex;
	max-width: 350px;
	align-content: start;
	margin-bottom: 20px;
`;
