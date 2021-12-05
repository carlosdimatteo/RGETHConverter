import { useState } from 'react';
import {
	Container,
	TwitterLogoContainer,
	StyledTwitterLogo,
	StyledSpan,
} from './TwitterLink.styles';
import { TwitterLinkProps } from './types';

export function TwitterLink({ username }: TwitterLinkProps) {
	const [hovered, setHovered] = useState<boolean>(false);
	return (
		<Container
			target="_blank"
			href={`https://twitter.com/${username}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<TwitterLogoContainer>
				<StyledTwitterLogo hovered={hovered} />
			</TwitterLogoContainer>
			<StyledSpan hovered={hovered}>{`@${username}`}</StyledSpan>
		</Container>
	);
}
