import axios from 'axios';
import { availableTokenSymbol, PriceObjectType } from '../../types';
import { headerConfig, PRICE_CONVERSION_ENDPOINT } from './constants';

export abstract class CoinMarketCapAPI {
	public static async getPrice(
		tokenSymbol: string,
	): Promise<{ price: number; name: string; symbol: string }> {
		try {
			const {
				data,
				data: {
					data: {
						symbol,
						name,
						amount,
						quote: {
							USD: { price: floatPrice },
						},
					},
				},
			} = await axios.get(
				`${PRICE_CONVERSION_ENDPOINT}?amount=1&symbol=${tokenSymbol}&convert=usd`,
				headerConfig,
			);
			const price = +floatPrice.toFixed(2);
			// console.log({data,price,symbol,name,amount})
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
		symbols.map(async (symbol: availableTokenSymbol) => {
			const { price } = await CoinMarketCapAPI.getPrice(symbol);
			priceObject[symbol] = price;
		}, {});
		return priceObject;
	}
}
