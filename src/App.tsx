import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyles';
import { ConverterTheme } from './theme';
import { Header } from './containers/Header';
import { Content } from './containers/Content';
import { ConverterContent } from './containers/Converter';
import { PriceCardsContainer } from './containers/Prices/Prices.styles';
import { Prices } from './containers/Prices';
import { Web3Provider } from './hooks/useWeb3';
export default function App() {
	return (
		<Web3Provider>
			<ThemeProvider theme={ConverterTheme}>
				<GlobalStyle />
				<Header />
				<Content>
					<>
						<ConverterContent />
						<Prices />
					</>
				</Content>
			</ThemeProvider>
		</Web3Provider>
	);
}
