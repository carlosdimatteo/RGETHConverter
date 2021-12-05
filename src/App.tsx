import { BigNumber, ethers } from 'ethers';
import { useState, useEffect, ChangeEvent } from 'react';
import { CoinMarketCapAPI } from './adapters/CoinMarketCap';
import './App.css';
import { conversionTable, Unit } from './constants/table';
import { useWeb3 } from './hooks/useWeb3';
import { safeConvertFrom } from './utils/converter';
export default function App() {
	const [value, setValue] = useState('0');
	const [currentFactor, setCurrentFactor] = useState({
		num: 1,
		str: '1',
	});
	const [price, setPrice] = useState<{ [key: string]: number }>({});
	const { connect, disconnect, provider, getETHBalance, ready } = useWeb3();
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

	useEffect(() => {
		async function setEthBalance() {
			const { wei, eth } = await getETHBalance();
			setValue(wei?.toString());
			console.log('set eth', wei.toString());
		}
		if (ready) {
			setEthBalance();
		}
	}, [ready]);
	return (
		<main>
			Convert Units (ETH : {JSON.stringify(price)})
			<br />
			<button onClick={connect}>connect your wallet!</button>
			<br />
			{Object.entries(conversionTable).map(([name, factor]) => {
				const typedFactor = factor as Unit;
				return (
					<>
						{name} :{' '}
						<input
							value={safeConvertFrom(value, currentFactor.num, typedFactor.num)}
							onChange={({
								currentTarget: { value: text },
							}: ChangeEvent<HTMLInputElement>) => {
								console.log({ text });
								setValue(text);
								setCurrentFactor(typedFactor);
							}}
						/>
						<br />
					</>
				);
			})}
		</main>
	);
}
