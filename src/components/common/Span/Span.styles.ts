import styled from 'styled-components';

export const SpanComponent = styled.span`
	font-size: 14px;
	color: ${({
		theme: {
			colors: { secondary },
		},
	}) => secondary};
`;
