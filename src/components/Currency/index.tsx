import {
	CurrencyContainer,
	LogoContainer,
	StyledSpan,
} from './Currency.styles';
import { CurrencyProps } from './types';
import { ReactComponent as EthLogo } from '../../assets/eth.svg';
import { ReactComponent as RGToken } from '../../assets/rgtoken.svg';
import { ReactComponent as DaiLogo } from '../../assets/dai.svg';

export function Currency({ price, symbol, isToken, usdPrice }: CurrencyProps) {
	function renderLogo() {
		switch (symbol) {
			case 'eth':
				return <EthLogo />;
			case 'raid':
				return <RGToken />;
			case 'dai':
				return <DaiLogo />;
		}
	}

	function renderCurrencyByType() {
		if (isToken) {
			return (
				<CurrencyContainer>
					<LogoContainer>{renderLogo()}</LogoContainer>
					<StyledSpan symbol>{symbol}</StyledSpan>
					<StyledSpan>
						{price > 0.0001 ? price.toFixed(4) : 0} (
						{usdPrice > 0 ? usdPrice.toFixed(4) : 0} USD)
					</StyledSpan>
				</CurrencyContainer>
			);
		}

		return (
			<CurrencyContainer>
				<LogoContainer>{renderLogo()}</LogoContainer>
				<StyledSpan symbol>{symbol}</StyledSpan>
				<StyledSpan>${price.toFixed(4)}</StyledSpan>
			</CurrencyContainer>
		);
	}

	return renderCurrencyByType();
}
