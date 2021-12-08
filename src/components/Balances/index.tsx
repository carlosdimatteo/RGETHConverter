import { loadingPhrases } from '../../constants/loadingPhrases';
import {
	CardContainer,
	CardContent,
	LoaderContainer,
	StyledH3,
} from '../../containers/PricesAndBalances/PricesAndBalances.styles';
import { PricesAndBalancesProps } from '../../types';
import { Card } from '../common/Card';
import { Span } from '../common/Span/Span';
import { Currency } from '../Currency';

export function Balances({ ready, balances, loading }: PricesAndBalancesProps) {
	return (
		<CardContainer>
			<Card>
				<CardContent>
					<StyledH3>Balances</StyledH3>
					{loading && ready && (
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
						balances.map((b) => (
							<Currency
								symbol={b?.symbol}
								price={b?.price || 0}
								key={b?.symbol}
								usdPrice={b?.usdPrice}
								isToken
							/>
						))}
					{!ready && <Span>Connect your wallet to price check your bags</Span>}
				</CardContent>
			</Card>
		</CardContainer>
	);
}
