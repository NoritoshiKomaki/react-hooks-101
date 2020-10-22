import React, { useContext } from 'react'
import {
  ADD_OPERATION_LOG,
  DELETE_EVENT
} from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)
  const id = event.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`)
    if (result) {
      dispatch({ type: DELETE_EVENT, id })

      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id=${id})を削除しました。`,
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  return (
    <tr>
      <td><button type="button" className="btn btn-danger" style={{height: '24px', width: '24px', padding: 0, lineHeight: 1, verticalAlign: 'top'}} onClick={handleClickDeleteButton}>×</button></td>
      <td>{event.title}</td>
      <td>{Math.round(event.body * 10000) / 10000}</td>
      <td>{Math.round(2000000 * event.body)}</td>
      <td>{Math.round(2000000 * event.body - event.title)}</td>
    </tr>
  )
}

export default Event