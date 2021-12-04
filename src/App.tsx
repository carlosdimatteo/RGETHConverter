import { BigNumber, ethers } from 'ethers';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyles';
import { conversionTable, Unit } from './constants/table';
import { ConverterTheme } from './theme';
import { safeConvertFrom } from './utils/converter';
import { Header } from './containers/Header';
import { Content } from './containers/Content';
export default function App() {
	return (
		<ThemeProvider theme={ConverterTheme}>
			<GlobalStyle />
			<Content>
				<Header />
			</Content>
		</ThemeProvider>
	);
}
