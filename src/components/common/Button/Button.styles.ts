import styled from 'styled-components';

export const Container = styled.div<{ disabled?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({
		theme: {
			colors: { primary },
		},
	}) => primary};
	border-radius: ${({
		theme: {
			borderRadius: { standard },
		},
	}) => standard};
	cursor: pointer;

	:hover {
		opacity: 0.7;
	}

	${({ disabled }) =>
		disabled &&
		`
      cursor: auto;
      opacity: 0.7;

      :hover{
      opacity: 0.7;
      }
    `}
`;

export const ButtonComponent = styled.button`
	padding: 8px 16px;
	color: ${({
		theme: {
			colors: { secondary },
		},
	}) => secondary};
	font-size: 14px;
	font-weight: 700;
	line-height: 20px;
	cursor: inherit;
`;
