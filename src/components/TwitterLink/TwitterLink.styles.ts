import styled from 'styled-components';
import { ReactComponent as TwitterLogo } from '../../assets/twitterLogo.svg';
import { Span } from '../common/Span/Span';

export const Container = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 5px;
`;

export const TwitterLogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 10px;
`;

export const StyledTwitterLogo = styled(TwitterLogo)<{ hovered?: boolean }>`
	fill: #1da1f2;
	${({
		hovered,
		theme: {
			colors: { primary },
		},
	}) =>
		hovered &&
		`
fill: ${primary};

`};
`;

export const StyledSpan = styled(Span)<{ hovered?: boolean }>`
	${({
		hovered,
		theme: {
			colors: { primary },
		},
	}) =>
		hovered &&
		`
		color: ${primary};

`}
`;
