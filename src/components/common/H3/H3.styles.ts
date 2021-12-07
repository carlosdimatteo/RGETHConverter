import styled from 'styled-components';

export const H3Component = styled.h3<{ className?: string }>`
	font-size: 22px;
	color: ${({
		theme: {
			colors: { secondary },
		},
	}) => secondary};
	font-weight: bold;
	line-height: 20px;
`;
