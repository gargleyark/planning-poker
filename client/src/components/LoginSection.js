import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'
import { WS_URL } from '../constants'

export function LoginSection({ onLogin }) {
  const [username, setUsername] = useState('')
  const [error, setError] = useState(null)
  const { lastJsonMessage, sendJsonMessage } = useWebSocket(WS_URL, {
    share: true,
  })

  function logInUser(e) {
    e.preventDefault()
    if (!username.trim()) {
      setError('Username is required')
      return
    }
    if (!username.match(/^[a-zA-Z0-9]+?[a-zA-Z]+[a-zA-Z0-9]+?$/)) {
      setError('Username must be alphanumeric and contain at least one letter')
      return
    }
    if (
      Object.values(lastJsonMessage?.data?.users).find(
        ({ username: existingUser }) => existingUser === username
      )
    ) {
      setError('Username is already taken')
      return
    }
    onLogin && onLogin(username)
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
            <label htmlFor="roomName">Room ID</label>
            <input
              name="roomName"
              disabled
              className="form-control"
              value="Coregi 🐶"
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
