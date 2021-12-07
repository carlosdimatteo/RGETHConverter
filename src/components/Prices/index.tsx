import { Card } from '../../components/common/Card';
import { Currency } from '../../components/Currency';
import { loadingPhrases } from '../../constants/loadingPhrases';
import {
	CardContainer,
	CardContent,
	StyledH3,
	LoaderContainer,
} from '../../containers/PricesAndBalances/PricesAndBalances.styles';
import { PricesAndBalancesProps } from '../../types';
import { Span } from '../common/Span/Span';

export function Prices({ prices, loading }: PricesAndBalancesProps) {
	return (
		<CardContainer>
			<Card>
				<CardContent>
					<StyledH3 loading={loading}>Prices</StyledH3>
					{loading && (
						<LoaderContainer>
							<Span>
								{
									loadingPhrases[
										Math.floor(Math.random() * loadingPhrases.length + 1)
									]
								}
							</Span>
						</LoaderContainer>
					)}
					{!loading &&
						Object.keys(prices).map((p) => (
							<Currency symbol={p} price={prices[p]} key={p} />
						))}
				</CardContent>
			</Card>
		</CardContainer>
	);
}
