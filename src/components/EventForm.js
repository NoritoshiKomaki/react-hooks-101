import React, { useContext, useState } from 'react'
import { 
  CREATE_EVENT,
  ADD_OPERATION_LOG
} from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601} from '../utils'

const EventForm = () => {
  const { dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()

    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601()
    })

    setTitle('')
    setBody('')
  }

  const unCreatable = title === '' || body === ''

  return (
    <>
      <form>
        <div className="form-group">
          <br />
          <label htmlFor="formEventTitle">購入額</label>
          <input type="number" className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">購入枚数</label>
          <input type="number" className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>SEND</button>
        {/* <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>全てのイベントを削除する</button> */}
      </form>
    </>
  )
}

export default EventForm