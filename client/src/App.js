import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { WS_URL } from './constants'
import { LoginSection } from './components/LoginSection'
import { MainSection } from './components/MainSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState({})
  const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: () => {},
    share: true,
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true,
  })

  const login = (username, room) => {
    setUsername(username)
    setRoom(room)
  }

  useEffect(() => {
    if (username && readyState === ReadyState.OPEN) {
      sendJsonMessage({
        content: { username, room },
        type: 'userevent',
      })
    }
  }, [username, sendJsonMessage, readyState])

  return (
    <>
      <div className="AppWrapper">
        <Header username={username} />
        <div className="container-fluid">
          {username ? (
            <MainSection username={username} />
          ) : (
            <LoginSection onLogin={login} />
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
