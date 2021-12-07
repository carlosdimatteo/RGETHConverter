import React from 'react';
import { H3Component } from './H3.styles';

export function H3({
	children,
	className,
}: {
	children: React.ReactElement | string;
	className?: string;
}) {
	return <H3Component className={className}>{children}</H3Component>;
}
