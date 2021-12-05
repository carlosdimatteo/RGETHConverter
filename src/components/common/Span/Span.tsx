import React from 'react';
import { SpanComponent } from './Span.styles';

export function Span({
	children,
	className,
}: {
	children: React.ReactElement | string;
	className?: string;
}) {
	return <SpanComponent className={className}>{children}</SpanComponent>;
}
