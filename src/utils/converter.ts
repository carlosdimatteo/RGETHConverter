import {BigNumber,ethers} from 'ethers'

export function safeConvert(value:string,factor:number){
  try{
    const conversion = ethers.utils.formatUnits(BigNumber.from(value||"0"),factor).toString()
    console.log({value,factor,conversion})
    return conversion ==="0.0" ? 0 : conversion
  }catch(e){
    console.log('failed conversion',e)
   return  value
  }
}

export function safeConvertFrom (value:string, fromFactor:number,toFactor:number){
try{
  if(!value|| value[value.length-1] === "."){
    return value
  }
  const numberToUse = ethers.utils.parseUnits(value,fromFactor)
    const result = ethers.utils.formatUnits(numberToUse,toFactor).toString()
  console.log({value,fromFactor,toFactor,result,numberToUse})
    return result === "0.0" ? value : result.replace(/\.0$/,'')

}catch(e){
  console.log(e)
  return value
}
}