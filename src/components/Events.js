import React, { useContext } from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = () => {
  const { state } = useContext(AppContext)
  const arrayTitle = state.events.map((event) => Number(event.title))
  const totalTitle = arrayTitle.reduce((a, x) => {return a + x})

  const arrayBody = state.events.map((event) => Number(event.body))
  const totalBody = arrayBody.reduce((a, x) => {return a + x})

  return (
    <>
      <br></br>
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>金額</th>
            <th>枚数</th>
            <th>売却</th>
            <th>利益</th>
          </tr>
        </thead>
        <tbody>
        <tr style={{fontWeight: 'bold'}}>
          <td>&nbsp;計</td>
          <td>{totalTitle}</td>
          <td>{Math.round(totalBody * 10000) / 10000}</td>
          <td>{Math.round(2000000 * totalBody)}</td>
          <td>{Math.round(2000000 * totalBody - totalTitle)}</td>
        </tr>
        </tbody>
        <tbody>
          { state.events.map((event, index) => (<Event key={index} event={event} />))}
        </tbody>
      </table>
    </>
  )
}

export default Events
