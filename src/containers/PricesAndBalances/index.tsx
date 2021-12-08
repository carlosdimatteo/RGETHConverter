import { useState, useEffect } from 'react';
import { CoinMarketCapAPI } from '../../adapters/CoinMarketCap';
import { Balances } from '../../components/Balances';
import { Prices } from '../../components/Prices';
import { useWeb3 } from '../../hooks/useWeb3';
import { PriceObjectType } from '../../types';
import { Container } from './PricesAndBalances.styles';

export function PricesAndBalances() {
	const { getETHBalance, getRAIDBalance, getDAIBalance, ready } = useWeb3();
	const [balances, setBalances] = useState([]);
	const [prices, setPrices] = useState<PriceObjectType>(null);
	const [loadingPrices, setLoadingPrices] = useState(true);
	const [loadingBalances, setLoadingBalances] = useState(true);

	async function setEthBalance() {
		const { eth } = await getETHBalance();
		const { raid } = await getRAIDBalance();
		const { dai } = await getDAIBalance();
		setBalances([
			{
				symbol: 'eth',
				price: +eth,
				usdPrice: prices?.eth * +eth,
			},
			{
				symbol: 'raid',
				price: +raid,
				usdPrice: prices?.raid * +raid,
			},
			{
				symbol: 'dai',
				price: +dai,
				usdPrice: prices?.dai * +dai,
			},
		]);
		setLoadingBalances(false);
	}

	async function getPrice() {
		const apiData = await CoinMarketCapAPI.getPrices(['eth', 'raid', 'dai']);
		setPrices(apiData);
		setLoadingPrices(false);
	}

	useEffect(() => {
		getPrice();
	}, []);

	useEffect(() => {
		if (ready && prices) {
			console.log({ ready, prices });
			setEthBalance();
		}
	}, [ready, prices]);

	return (
		<Container>
			<Prices prices={prices} loading={loadingPrices} />
			<Balances ready={ready} balances={balances} loading={loadingBalances} />
		</Container>
	);
}
