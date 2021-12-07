import styled from 'styled-components';
import { Span } from '../../components/common/Span/Span';

export const ConverterContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LabelAndInputContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 20px;

	:last-child {
		margin-bottom: 0px;
	}
`;

export const LabelContainer = styled.div`
	width: 100%;
	max-width: 200px;
	display: flex;
	margin-right: 15px;
`;

export const StyledLabel = styled(Span)`
	font-size: 25px;
	color: ${({
		theme: {
			colors: { primary },
		},
	}) => primary};
	margin-right: 8px;
`;
