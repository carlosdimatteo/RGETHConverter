import { ChangeEvent } from 'react';
import { InputContainer, StyledInput, StyledLabel } from './Input.styles';

export function Input({
	value,
	onChange,
	label,
}: {
	value: string;
	onChange: (text: string) => void;
	label?: string;
}) {
	return (
		<InputContainer>
			{label && <StyledLabel>{label}:</StyledLabel>}
			<StyledInput
				value={value}
				onChange={({
					currentTarget: { value: text },
				}: React.ChangeEvent<HTMLInputElement>) => {
					onChange(text);
				}}
			/>
		</InputContainer>
	);
}
