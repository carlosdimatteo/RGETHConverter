import React from 'react';
import { Container, TwitterLogoContainer } from './TwitterLink.styles';
import { ReactComponent as TwitterLogo } from '../../assets/twitterLogo.svg';
import { TwitterLinkProps } from './types';
import { Span } from '../common/Span/Span';

export function TwitterLink({ username }: TwitterLinkProps) {
	return (
		<Container target="_blank" href={`https://twitter.com/${username}`}>
			<TwitterLogoContainer>
				<TwitterLogo />
			</TwitterLogoContainer>
			<Span>{`@${username}`}</Span>
		</Container>
	);
}
