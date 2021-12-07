import { InputContainer, StyledInput } from './Input.styles';

export function Input({
	value,
	onChange,
}: {
	value: string;
	onChange: (text: string) => void;
}) {
	return (
		<InputContainer>
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
