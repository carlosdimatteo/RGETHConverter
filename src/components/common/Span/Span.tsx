import React from 'react';
import { SpanComponent } from './Span.styles';

export function Span({ children }: { children: React.ReactElement | string }) {
	return <SpanComponent>{children}</SpanComponent>;
}
