import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyles';
import { ConverterTheme } from './theme';
import { Header } from './containers/Header';
import { Content } from './containers/Content';
import { Converter } from './containers/Converter';
import { Web3Provider } from './hooks/useWeb3';
import { PricesAndBalances } from './containers/PricesAndBalances';
import { Footer } from './components/Footer';
export default function App() {
	return (
		<Web3Provider>
			<ThemeProvider theme={ConverterTheme}>
				<GlobalStyle />
				<Header />
				<Content>
					<Converter />
					<PricesAndBalances />
				</Content>
			</ThemeProvider>
		</Web3Provider>
	);
}
