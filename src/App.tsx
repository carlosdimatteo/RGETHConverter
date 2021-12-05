import { BigNumber, ethers } from 'ethers';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyles';
import { conversionTable, Unit } from './constants/table';
import { ConverterTheme } from './theme';
import { safeConvertFrom } from './utils/converter';
import { Header } from './containers/Header';
import { Content } from './containers/Content';
import { useWeb3 } from './hooks/useWeb3';
export default function App() {
	// useEffect( ()=>{
	//   async function getPrice() {
	//     const apiData = await  CoinMarketCapAPI.getPrices(['eth','raid','dai'])
	//     console.log({apiData})
	//     setPrice(apiData)
	//   }
	//   if(!Object.values(price).length){
	//     getPrice()
	//   }
	// } ,[])

	// useEffect(() => {
	// 	async function setEthBalance() {
	// 		const { wei, eth } = await getETHBalance();
	// 		setValue(wei?.toString());
	// 		console.log('set eth', wei.toString());
	// 	}
	// 	if (ready) {
	// 		setEthBalance();
	// 	}
	// }, [ready]);
	return (
		<ThemeProvider theme={ConverterTheme}>
			<GlobalStyle />
			<Content>
				<Header />
			</Content>
		</ThemeProvider>
	);
}
