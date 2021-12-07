import styled from 'styled-components';
import { H3 } from '../../components/common/H3';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const CardContainer = styled.div`
	display: flex;
	height: 250px;
	min-width: 500px;
`;

export const StyledH3 = styled(H3)<{ loading?: boolean }>`
	font-size: 25px;
	margin-bottom: 30px;

	${({ loading }) =>
		loading &&
		`
		margin-bottom: 0px;
	`}
`;

export const CardContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const LoaderContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
