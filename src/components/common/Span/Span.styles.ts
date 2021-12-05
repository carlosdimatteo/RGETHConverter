import styled from 'styled-components';

export const SpanComponent = styled.span<{ className?: string }>`
	font-size: 14px;
	color: ${({
		theme: {
			colors: { secondary },
		},
	}) => secondary};
`;
