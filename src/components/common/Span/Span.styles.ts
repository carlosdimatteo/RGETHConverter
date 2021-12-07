import styled from 'styled-components';

export const SpanComponent = styled.span<{ className?: string }>`
	font-size: 18px;
	color: ${({
		theme: {
			colors: { secondary },
		},
	}) => secondary};
`;
