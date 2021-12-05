import React from 'react';
import { Container, ButtonComponent } from './Button.styles';
import { ButtonProps } from './types';

export function Button({ children, disabled, onClick }: ButtonProps) {
	return (
		<Container disabled={disabled} onClick={onClick}>
			<ButtonComponent disabled={disabled}>{children}</ButtonComponent>
		</Container>
	);
}
