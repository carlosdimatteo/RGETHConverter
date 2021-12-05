import { PriceObjectType } from '../../../types';
import { CardContainer, PriceContainer } from './Card.styles';

export function Card({ children }: { children?: React.ReactElement }) {
	return <CardContainer>{children}</CardContainer>;
}
