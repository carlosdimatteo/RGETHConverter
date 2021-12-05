import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyles';
import { ConverterTheme } from './theme';
import { Header } from './containers/Header';
import { Content } from './containers/Content';
import { ConverterContent } from './containers/Converter';
import { PriceCardsContainer } from './containers/Prices/Prices.styles';
export default function App() {
	return (
		<ThemeProvider theme={ConverterTheme}>
			<GlobalStyle />
			<Header />
			<Content>
				<>
					<ConverterContent />
					<PriceCardsContainer />
				</>
			</Content>
		</ThemeProvider>
	);
}
