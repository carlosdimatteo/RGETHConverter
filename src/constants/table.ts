export type Unit = {
  num:number,
  str:string
}

export const conversionTable:{[key:string]:Unit} = {
	wei: {
		num: 1,
		str: '1',
	},
	kwei: {
		num: 3,
		str: '1000',
	},
	mwei: {
		num: 6,
		str: '1000000',
	},
	gwei: {
		num: 9,
		str: '1000000000',
	},
	microether: {
		num: 12,
		str: '1000000000000',
	},
	milliether: {
		num: 15,
		str: '1000000000000000',
	},
	ether: {
		num: 18,
		str: '1000000000000000000',
	},
	kether: {
		num: 21,
		str: '1000000000000000000000',
	},
	mether: {
		num: 24,
		str: '1000000000000000000000000',
	},
	gether: {
		num: 27,
		str: '1000000000000000000000000000',
	},
	tether: {
		num: 30,
		str: '1000000000000000000000000000000',
	},
};