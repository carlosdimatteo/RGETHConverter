import { BigNumber, ethers } from 'ethers'
import * as React from 'react'
import './App.css'
import {conversionTable,Unit} from './constants/table'
import {safeConvertFrom} from './utils/converter'
export default function App() {
  const [value,setValue] = React.useState("0")
  const [currentFactor,setCurrentFactor] = React.useState({num:1,str:"1"})
  return (
    <main>
    Convert Units (ETH)
    <br/>
      {Object.entries(conversionTable).map(([name,factor])=>{
        const typedFactor = factor as Unit
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