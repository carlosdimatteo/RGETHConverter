import React from 'react';

export type ButtonProps = {
	children: React.ReactElement | string;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
};
