import styled from 'styled-components';
import { Span } from '../common/Span/Span';

export const CurrencyContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

export const LogoContainer = styled.div`
	svg {
		width: 32px;
		height: 100%;
		border-radius: ${({
			theme: {
				borderRadius: { rounded },
			},
		}) => rounded};
	}
	margin-right: 15px;
`;

export const StyledSpan = styled(Span)<{ symbol?: boolean }>`
	font-size: 20px;

	${({ symbol }) =>
		symbol &&
		`
		width: 60px;
    font-weight: bold;
    margin-right: 10px;
		text-transform: uppercase;
  `}
`;
