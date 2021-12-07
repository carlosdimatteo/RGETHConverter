import axios from 'axios';
import { availableTokenSymbol, PriceObjectType } from '../../types';
import { headerConfig, PRICE_CONVERSION_ENDPOINT } from './constants';

export abstract class CoinMarketCapAPI {
	public static async getPrice(
		tokenSymbol: string,
	): Promise<{ price: number; name: string; symbol: string }> {
		try {
			const {
				data: {
					data: {
						symbol,
						name,
						quote: {
							USD: { price: floatPrice },
						},
					},
				},
			} = await axios.get(
				`${PRICE_CONVERSION_ENDPOINT}?amount=1&symbol=${tokenSymbol}&convert=usd`,
				headerConfig,
			);
			const price = +floatPrice;
			return { price, symbol, name };
		} catch (e) {
			console.log({ e });
			throw e;
		}
	}

	public static async getPrices(
		symbols: availableTokenSymbol[],
	): Promise<PriceObjectType> {
		let priceObject: PriceObjectType = { eth: null, raid: null, dai: null };
		for (let i = 0; i < symbols.length; i++) {
			const { price } = await CoinMarketCapAPI.getPrice(symbols[i]);
			priceObject[symbols[i]] = price;
		}
		return priceObject;
	}
}
