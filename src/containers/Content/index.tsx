import React from 'react';
import { Container } from './styles';

export function Content({ children }: { children: React.ReactElement }) {
	return <Container>{children}</Container>;
}
