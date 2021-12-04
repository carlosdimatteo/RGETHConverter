import { BigNumber, ethers } from 'ethers'
import * as React from 'react'
import { CoinMarketCapAPI } from './adapters/CoinMarketCap'
import './App.css'
import {conversionTable,Unit} from './constants/table'
import {safeConvertFrom} from './utils/converter'
export default function App() {
  const [value,setValue] = React.useState("0")
  const [currentFactor,setCurrentFactor] = React.useState({num:1,str:"1"})
  const [price,setPrice] = React.useState<{[key:string]:number}>({})
 
  // React.useEffect( ()=>{
  //   async function getPrice() {
  //     const apiData = await  CoinMarketCapAPI.getPrices(['eth','raid','dai'])
  //     console.log({apiData})
  //     setPrice(apiData)
  //   }
  //   if(!Object.values(price).length){
  //     getPrice()
  //   }
  // } ,[])
  return (
    <main>
    Convert Units (ETH : {JSON.stringify(price)})
    <br/>
      {Object.entries(conversionTable).map(([name,factor])=>{
        const typedFactor = factor as Unit;
        return(<>
        {name} : <input value={ safeConvertFrom(value,currentFactor.num,typedFactor.num)} 
        onChange={({currentTarget:{value:text}}: React.ChangeEvent<HTMLInputElement>)=>{
          console.log({text})
          setValue(text)
          setCurrentFactor(typedFactor)
        }}
        /> 
        <br/></>)
      })}
    </main>
  )
}