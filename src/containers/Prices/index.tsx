import { useEffect, useState } from 'react';
import { CoinMarketCapAPI } from '../../adapters/CoinMarketCap';
import { Card } from '../../components/common/Card';
import { useWeb3 } from '../../hooks/useWeb3';
import { PriceObjectType } from '../../types';
import { PriceCardsContainer } from './Prices.styles';

export function Prices() {
	const {
		connect,
		disconnect,
		provider,
		getETHBalance,
		getRAIDBalance,
		getDAIBalance,
		ready,
	} = useWeb3();

	const [price, setPrice] = useState<PriceObjectType>({
		eth: null,
		raid: null,
		dai: null,
	});
	const [balances, setBalances] = useState<PriceObjectType>({
		eth: null,
		raid: null,
		dai: null,
	});

	useEffect(() => {
		async function getPrice() {
			const apiData = await CoinMarketCapAPI.getPrices(['eth', 'raid', 'dai']);
			console.log({ apiData });
			setPrice(apiData);
		}
		if (!Object.values(price).length) {
			getPrice();
		}
	}, []);

	useEffect(() => {
		async function setEthBalance() {
			const { wei, eth } = await getETHBalance();
			const { wei: raidWei, raid } = await getRAIDBalance();
			const { wei: daiWei, dai } = await getDAIBalance();
			console.log('set eth', { wei, eth, raid, dai });
		}
		if (ready) {
			setEthBalance();
		}
	}, [ready]);
	return (
		<PriceCardsContainer>
			<Card></Card>
		</PriceCardsContainer>
	);
}
