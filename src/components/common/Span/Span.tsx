import React from 'react';
import { SpanComponent } from './Span.styles';

export function Span({
	children,
	className,
}: {
	children: React.ReactElement | any;
	className?: string;
}) {
	return <SpanComponent className={className}>{children}</SpanComponent>;
}
