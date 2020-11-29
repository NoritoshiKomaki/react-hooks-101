import React, { useContext, useState } from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = () => {
  const { state } = useContext(AppContext)
  const arrayTitle = state.events.map((event) => Number(event.title))
  const totalTitle = state.events.length === 0 ? 0 : arrayTitle.reduce((a, x) => {return a + x})
  const arrayBody = state.events.map((event) => Number(event.body))
  const totalBody = state.events.length === 0 ? 0 : arrayBody.reduce((a, x) => {return a + x}) 
  const [price, setPrice] = useState(2000000)
  const prices = [2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000]

  return (
    <>
      <select style={{display: 'block', padding: '8px', margin: '0 auto', fontWeight: 'bold'}} onChange={ e => setPrice(e.target.value) }>
        { prices.map((price, index) => (<option key={index} value={price}>{price / 10000}</option>))}
      </select>
      <br></br>
      <table className="table table-hover" style={{textAlign: 'center'}}>
        <thead>
          <tr>
            <th></th>
            <th style={{padding: '8px 0'}}>金額</th>
            <th style={{padding: '8px 0'}}>枚数</th>
            <th style={{padding: '8px 0'}}>売却</th>
            <th style={{padding: '8px 0'}}>利益</th>
          </tr>
        </thead>
        <tbody>
        <tr style={{fontWeight: 'bold'}}>
          <td style={{padding: '8px 0'}}>&nbsp;計</td>
          <td style={{padding: '8px 0'}}>{totalTitle}</td>
          <td style={{padding: '8px 0'}}>{Math.round(totalBody * 10000) / 10000}</td>
          <td style={{padding: '8px 0'}}>{Math.round(price * totalBody)}</td>
          <td style={{padding: '8px 0'}}>{Math.round(price * totalBody - totalTitle)}</td>
        </tr>
        </tbody>
        <tbody>
          { state.events.map((event, index) => (<Event key={index} event={event} price={price} />))}
        </tbody>
      </table>
    </>
  )
}

export default Events
