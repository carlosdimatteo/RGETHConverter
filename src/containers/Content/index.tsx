import React from 'react';
import { Container } from './Content.styles';

export function Content({
	children,
}: {
	children: React.ReactElement | React.ReactElement[];
}) {
	return <Container>{children}</Container>;
}
