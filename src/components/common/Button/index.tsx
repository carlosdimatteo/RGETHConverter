import React from 'react';
import { Container, ButtonComponent } from './Button.styles';
import { ButtonProps } from './types';

export function Button({
	children,
	disabled,
	onClick,
	className,
}: ButtonProps) {
	return (
		<Container disabled={disabled} onClick={onClick} className={className}>
			<ButtonComponent disabled={disabled}>{children}</ButtonComponent>
		</Container>
	);
}
