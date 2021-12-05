import styled from 'styled-components';
import { Button } from '../common/Button';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: end;
`;

export const StyledButton = styled(Button)<{ withAddress?: boolean }>`
	${({ withAddress }) =>
		withAddress &&
		`
			cursor: auto;
`}
`;
