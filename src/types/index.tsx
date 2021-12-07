export type availableTokenSymbol = 'eth' | 'raid' | 'dai';
export type BalanceType = {
	symbol: string;
	price?: number;
	usdPrice?: number;
};

export type PriceObjectType = {
	[key: string]: number;
};

export type PricesAndBalancesProps = {
	prices?: {
		[key: string]: number | null;
	};
	balances?: BalanceType[];
	loading?: boolean;
};
