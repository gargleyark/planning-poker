import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'
import { WS_URL } from '../constants'

export function LoginSection({ onLogin }) {
  const [username, setUsername] = useState('')
  const [roomname, setRoomname] = useState('')
  const [error, setError] = useState(null)
  const { lastJsonMessage, sendJsonMessage } = useWebSocket(WS_URL, {
    share: true,
    reconnectAttempts: 5,
  })

  const isInvalidUsername = () => {
    if (!username.trim()) {
      setError('Username is required')
      return true
    }
    if (!username.match(/^[a-zA-Z\s]+$/)) {
      setError('Usernames can only contain letters and spaces')
      return true
    }
    if (
      Object.values(lastJsonMessage?.data?.users || {}).find(
        ({ username: existingUser }) =>
          existingUser === username.trim().replace(/\s+/g, '-')
      )
    ) {
      setError('Username is already taken')
      return true
    }
  }

  const isInvalidRoomName = () => {
    if (!roomname.trim()) {
      setError('Room name is required')
      return true
    }
  }

  function logInUser(e) {
    e.preventDefault()
    if (isInvalidUsername()) {
      return
    }
    if (isInvalidRoomName()) {
      return
    }
    onLogin &&
      onLogin(username.trim().replace(/\s+/g, '-'), {
        name: roomname.trim(),
        id: 'arb-zzy-fgn',
      })
  }

  useEffect(() => {
    sendJsonMessage({
      type: 'connection',
    })
  }, [])

  return (
    <div className="account">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__profile">
            <p className="account__name">Hello, user!</p>
            <p className="account__sub">Join to start voting</p>
          </div>
          <form onSubmit={logInUser}>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              onInput={(e) => setUsername(e.target.value)}
              className="form-control"
            />
            <label htmlFor="roomName">Room name</label>
            <input
              name="roomName"
              className="form-control"
              onInput={(e) => setRoomname(e.target.value)}
            />
            <div className="button-wrapper">
              <button type="submit" className="button-vote login">
                Join
              </button>
            </div>
          </form>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </div>
  )
}
