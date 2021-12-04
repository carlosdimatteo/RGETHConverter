import { BigNumber, ethers } from 'ethers';

export function safeConvert(value: string, factor: number) {
	try {
		const conversion = ethers.utils
			.formatUnits(BigNumber.from(value || '0'), factor)
			.toString();
		// console.log({value,factor,conversion})
		return conversion === '0.0' ? 0 : conversion;
	} catch (e) {
		console.log('failed conversion', e);
		return value;
	}
}

export function safeConvertFrom(
	value: string,
	fromFactor: number,
	toFactor: number,
) {
	try {
		if (!value || value[value.length - 1] === '.') {
			return value;
		}
		const numberToUse = ethers.utils.parseUnits(value, fromFactor);
		const result = ethers.utils.formatUnits(numberToUse, toFactor).toString();
		// console.log({value,fromFactor,toFactor,result,numberToUse})
		return result === '0.0' ? value : result.replace(/\.0$/, '');
	} catch (e) {
		console.log(e);
		return value;
	}
}

function priceConvertOperation(to: number, from: number, amount: number) {
      return from/to * amount
}
// (window as any ).x = priceConvert
type priceConversionParamType = {
	from: { symbol: string; price: number };
	to: { symbol: string; price: number };
	amount: number;
};
export function priceConvert ({to,from,amount}:priceConversionParamType){
  const result = priceConvertOperation(to.price,from.price,amount)
    return {to,from,amount,result}
}


export function getPriceConversionString({
	from,
	to,
	amount,
}: priceConversionParamType):string {
	const result = priceConvertOperation(to.price,from.price,amount) 
	return `${amount}${from.symbol} : ${result}${to.symbol}`

}
