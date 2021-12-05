export type Unit = {
	num: number;
	str: string;
};

export const conversionTable: { [key: string]: Unit } = {
	wei: {
		num: 1,
		str: '1',
	},
	kwei: {
		num: 4,
		str: '1000',
	},
	mwei: {
		num: 7,
		str: '1000000',
	},
	gwei: {
		num: 10,
		str: '1000000000',
	},
	microether: {
		num: 13,
		str: '1000000000000',
	},
	milliether: {
		num: 16,
		str: '1000000000000000',
	},
	ether: {
		num: 19,
		str: '1000000000000000000',
	},
	kether: {
		num: 22,
		str: '1000000000000000000000',
	},
	mether: {
		num: 25,
		str: '1000000000000000000000000',
	},
	gether: {
		num: 28,
		str: '1000000000000000000000000000',
	},
	tether: {
		num: 31,
		str: '1000000000000000000000000000000',
	},
};
