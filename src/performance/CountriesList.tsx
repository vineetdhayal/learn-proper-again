import React from 'react'
import Item from './Item'

const CountriesList = ({countries, onCountryChanged, savedCountry}: any) => {
  return (
    <div>
      {countries.map((c, index) => {
        return <Item country={c} key={index} onitemClicked={()=>onCountryChanged()}></Item>
      })}
    </div>
  )
}

export default CountriesList
