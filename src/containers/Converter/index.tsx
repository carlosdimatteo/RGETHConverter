import { useState } from 'react';
import { Input } from '../../components/Input';
import { conversionTable, Unit } from '../../constants/table';
import { safeConvertFrom } from '../../utils/converter';
import { ConverterContainer } from './ConverterContent.styles';

export function ConverterContent() {
	const [value, setValue] = useState('0');
	const [currentFactor, setCurrentFactor] = useState({
		num: 1,
		str: '1',
	});
	return (
		<ConverterContainer>
			{Object.entries(conversionTable).map(([name, factor]) => {
				const typedFactor = factor as Unit;
				return (
					<Input
						value={safeConvertFrom(value, currentFactor.num, typedFactor.num)}
						onChange={(text: string) => {
							console.log({ text });
							setValue(text);
							setCurrentFactor(typedFactor);
						}}
						label={name}
					/>
				);
			})}
		</ConverterContainer>
	);
}
